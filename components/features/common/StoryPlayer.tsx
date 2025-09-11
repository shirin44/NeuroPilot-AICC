import React, { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Story, StoryChoice, StoryScene } from '../../../types';
import { AppContext } from '../../../App';
import { LOCALIZED_CONTENT } from '../../../constants';
import CheckIcon from '../../icons/CheckIcon';
import { Star, Lightbulb } from 'lucide-react';
import { getStoryFeedback } from '../../../services/geminiService';

// ---------- Helpers (no emojis anywhere) ----------
const stripEmoji = (s: string) =>
  (s ?? '')
    .replace(/[\p{Extended_Pictographic}\p{Emoji_Presentation}\uFE0F\u200D]/gu, '')
    .replace(/^[\s*#♪★☆⭐✨⚠️ℹ️✅❗❕❓✳️✴️☑️➕➖➗✔️✖️•◆◇◉◈]+/u, '')
    .trim();

const pickIcon = (raw: string) => {
  const t = raw?.toLowerCase() ?? '';
  if (/[💡]|lightbulb|idea|tip/.test(t)) return 'idea';
  return 'star';
};

// --- Side Progress Bar Component ---
interface SideProgressBarProps {
  scenes: StoryScene[];
  activeSceneIndex: number;
  completedScenes: boolean[];
  onNodeClick: (index: number) => void;
}
const SideProgressBar: React.FC<SideProgressBarProps> = ({
  scenes,
  activeSceneIndex,
  completedScenes,
  onNodeClick
}) => (
  <div className="sticky top-24 h-full">
    <div className="relative h-full py-4">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-foreground/20" />
      <div className="relative flex flex-col items-center justify-between h-full space-y-8">
        {scenes.map((_, index) => {
          const isActive = index === activeSceneIndex;
          const isCompleted = completedScenes[index];
          return (
            <button
              key={index}
              onClick={() => onNodeClick(index)}
              className="relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300"
              aria-label={`Go to Scene ${index + 1}`}
              aria-current={isActive ? 'step' : undefined}
            >
              <span className={`absolute w-full h-full rounded-full ${isActive ? 'bg-primary/30 animate-progress-node-pulse' : ''}`} />
              <span className={`relative w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${isCompleted ? 'bg-primary' : isActive ? 'bg-primary' : 'bg-foreground/30'}`}>
                {isCompleted && <CheckIcon className="w-3 h-3 text-primary-foreground" />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  </div>
);

// --- Choice Button Component ---
interface ChoiceButtonProps {
  choice: StoryChoice;
  isSelected: boolean;
  isMultiSelect: boolean;
  onClick: () => void;
}
const ChoiceButton: React.FC<ChoiceButtonProps> = ({ choice, isSelected, isMultiSelect, onClick }) => {
  const { language } = useContext(AppContext);
  return (
    <button
      onClick={onClick}
      aria-pressed={isSelected}
      className={`w-full text-left flex items-start p-4 rounded-lg border-2 transition-all duration-300
        ${isSelected
          ? 'bg-primary border-primary shadow-lg text-primary-foreground transform scale-105'
          : 'bg-card hover:bg-muted border-border text-card-foreground'
        }`}
    >
      <div className={`flex-shrink-0 w-6 h-6 mt-0.5 rounded-full border-2 ${isSelected ? 'border-primary-foreground' : 'border-primary'} flex items-center justify-center transition-colors`}>
        {isSelected && <div className="w-3 h-3 bg-primary-foreground rounded-full" />}
      </div>
      <span className="ml-4 flex-1">{choice.text[language]}</span>
    </button>
  );
};

// --- Main Story Player Component ---
interface StoryPlayerProps {
  story: Story;
}
const StoryPlayer: React.FC<StoryPlayerProps> = ({ story }) => {
  const { language, narratorRole, setNarratorDialogue, setNarratorState, setMode } = useContext(AppContext);
  const navigate = useNavigate();

  const [userSelections, setUserSelections] = useState<Record<number, string[]>>({});
  const [affirmations, setAffirmations] = useState<Record<number, string | null>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);

  const [aiFeedback, setAiFeedback] = useState<string>('');
  const [aiLoading, setAiLoading] = useState(false);
  const [showReflections, setShowReflections] = useState(false);

  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const affirmationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep refs in sync with scene count
  useEffect(() => {
    sceneRefs.current = sceneRefs.current.slice(0, story.scenes.length);
  }, [story.scenes]);

  // Track which scene is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sceneRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) setActiveSceneIndex(index);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px', threshold: 0.1 }
    );

    sceneRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => {
      sceneRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, [story.scenes.length]);

  // Handle narrator + AI when finished
  useEffect(() => {
    if (isFinished) {
      setNarratorDialogue(story.closingAffirmation[language]);
      setNarratorState('celebrating');

      (async () => {
        try {
          setAiLoading(true);
          const result = await getStoryFeedback(userSelections, story, language);
          setAiFeedback(result.feedback || '');
        } catch (err) {
          console.error('AI feedback error:', err);
          setAiFeedback(''); // hide if failure
        } finally {
          setAiLoading(false);
        }
      })();
    } else {
      setNarratorDialogue('');
      setNarratorState('idle');
    }

    return () => {
      if (affirmationTimeoutRef.current) clearTimeout(affirmationTimeoutRef.current);
    };
  }, [isFinished, language, setNarratorDialogue, setNarratorState, story, userSelections]);

  // Selection handling
  const handleSelection = (sceneIndex: number, choice: StoryChoice) => {
    const choiceText = choice.text[language];
    const currentChoices = userSelections[sceneIndex] || [];
    const isMultiSelect = story.scenes[sceneIndex].choices.some((c) => c.isMultiSelect);

    let newChoices: string[];
    let affirmationToShow: string | null = null;

    if (isMultiSelect) {
      if (currentChoices.includes(choiceText)) {
        newChoices = currentChoices.filter((c) => c !== choiceText);
        if (newChoices.length > 0) {
          const lastSelectedText = newChoices[newChoices.length - 1];
          const lastChoice = story.scenes[sceneIndex].choices.find((c) => c.text[language] === lastSelectedText);
          affirmationToShow = lastChoice?.affirmation?.[language] || null;
        }
      } else {
        newChoices = [...currentChoices, choiceText];
        affirmationToShow = choice.affirmation?.[language] || null;
      }
    } else {
      newChoices = [choiceText];
      affirmationToShow = choice.affirmation?.[language] || null;
    }

    setUserSelections((prev) => ({ ...prev, [sceneIndex]: newChoices }));
    setAffirmations((prev) => ({ ...prev, [sceneIndex]: affirmationToShow }));

    if (affirmationTimeoutRef.current) clearTimeout(affirmationTimeoutRef.current);
    if (affirmationToShow) {
      const dialogueText = stripEmoji(affirmationToShow);
      setNarratorDialogue(dialogueText);
      setNarratorState('talking');
      affirmationTimeoutRef.current = setTimeout(() => {
        setNarratorDialogue('');
        setNarratorState('idle');
      }, 4000);
    } else {
      setNarratorDialogue('');
      setNarratorState('idle');
    }
  };

  // Finish / navigation handlers
  const finishStory = () => {
    if (narratorRole) {
      localStorage.setItem(`neuropilot_story_completed_${narratorRole}`, 'true');
    }
    setIsFinished(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartPractice = () => {
    setMode('practice');
    navigate('/dashboard');
  };

  const handleBackToDashboard = () => {
    navigate('/mode-selection');
  };

  const handleScrollToScene = (index: number) => {
    sceneRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Completion state
  const completedScenes = story.scenes.map((_, index) => (userSelections[index] || []).length > 0);
  const isAllScenesCompleted = completedScenes.every(Boolean);

  // i18n
  const BACK_TO_DASHBOARD = (LOCALIZED_CONTENT as any)?.backToDashboard?.[language] ?? 'Back to Dashboard';

  // Finished UI
  if (isFinished) {
    const closingRaw = story.closingAffirmation[language] || '';
    const closingIcon = pickIcon(closingRaw);
    const closingText = stripEmoji(closingRaw);

    return (
      <div className="w-full text-center p-8 md:p-16 bg-gradient-to-b from-primary/10 to-background rounded-2xl shadow-xl border border-primary/20 animate-fadeInUp">
        <div className="mb-6 animate-pulse-calm" style={{ animationIterationCount: 1, animationDuration: '2s' }} aria-hidden="true">
          {closingIcon === 'idea' ? (
            <Lightbulb className="w-20 h-20 mx-auto text-primary/70" strokeWidth={2.2} />
          ) : (
            <Star className="w-20 h-20 mx-auto text-primary/70" strokeWidth={2.2} />
          )}
        </div>

        <h2 className="font-display text-4xl font-bold text-foreground">
          {`You've completed "${story.title[language]}"`}
        </h2>
        <p className="mt-4 text-2xl font-medium text-foreground/80 max-w-3xl mx-auto">
          {closingText}
        </p>

        {/* Collapsible Reflections */}
        <div className="mt-12 text-left max-w-3xl mx-auto">
          <button
            onClick={() => setShowReflections((prev) => !prev)}
            className="flex items-center justify-between w-full px-4 py-3 bg-card border border-border rounded-lg shadow-sm hover:bg-muted transition"
            aria-expanded={showReflections}
            aria-controls="reflections-panel"
          >
            <span className="text-lg font-semibold text-foreground">
              {showReflections
                ? LOCALIZED_CONTENT.hideChoices?.[language] || 'Hide Your Choices'
                : LOCALIZED_CONTENT.viewChoices?.[language] || 'View Your Choices'}
            </span>
            <span className="text-sm text-muted-foreground">{showReflections ? '▲' : '▼'}</span>
          </button>

          {showReflections && (
            <ul id="reflections-panel" className="mt-4 space-y-4">
              {story.scenes.map((scene, idx) => (
                <li key={idx} className="p-4 bg-card rounded-lg border border-border shadow-sm">
                  <h4 className="font-semibold text-lg text-card-foreground">{scene.title[language]}</h4>
                  <p className="text-sm text-muted-foreground">{scene.text[language]}</p>
                  <div className="mt-2">
                    <span className="text-sm font-semibold text-primary">
                      {LOCALIZED_CONTENT.yourChoice?.[language] || 'Your choice:'}
                    </span>
                    <ul className="list-disc list-inside text-card-foreground mt-1">
                      {(userSelections[idx] || []).map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* AI feedback */}
        {aiLoading && (
          <p className="mt-8 text-muted-foreground">
            {LOCALIZED_CONTENT.generatingFeedback?.[language] || 'Generating feedback…'}
          </p>
        )}
        {aiFeedback && !aiLoading && (
          <div className="mt-12 max-w-3xl mx-auto p-6 bg-muted/50 rounded-xl border border-border shadow-inner text-left">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              {LOCALIZED_CONTENT.aiFeedback?.[language] || 'Feedback'}
            </h3>
            <p className="text-foreground/90 whitespace-pre-line">{aiFeedback}</p>
          </div>
        )}

        <div className="my-10 h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleStartPractice}
            className="px-12 py-4 bg-primary text-primary-foreground font-bold rounded-full text-xl transform hover:scale-105 transition-all duration-300 shadow-lg ring-4 ring-primary/30 hover:ring-primary/50"
          >
            {LOCALIZED_CONTENT.startPractice[language]}
          </button>
          <button
            onClick={handleBackToDashboard}
            className="px-12 py-4 rounded-full text-xl font-semibold border-2 border-border bg-card text-card-foreground hover:bg-muted transition-all duration-200 shadow-sm"
          >
            {BACK_TO_DASHBOARD}
          </button>
        </div>
      </div>
    );
  }

  // In-progress UI
  return (
    <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-8 md:gap-12 animate-fadeIn">
      {/* Left Column: Progress Bar */}
      <div className="hidden md:block">
        <SideProgressBar
          scenes={story.scenes}
          activeSceneIndex={activeSceneIndex}
          completedScenes={completedScenes}
          onNodeClick={handleScrollToScene}
        />
      </div>

      {/* Right Column: Story Content */}
      <div className="space-y-16">
        {story.scenes.map((scene, sceneIndex) => {
          const isMultiSelect = scene.choices.some((c) => c.isMultiSelect);
          const options = isMultiSelect ? scene.choices.slice(1) : scene.choices;
          const rawAff = affirmations[sceneIndex];
          const affText = rawAff ? stripEmoji(rawAff) : '';
          const affIcon = rawAff ? pickIcon(rawAff) : 'star';

          return (
            <div key={sceneIndex} ref={(el) => { sceneRefs.current[sceneIndex] = el; }}>
              <div className="mb-6 p-6 bg-card rounded-lg border border-border shadow-md relative overflow-hidden border-t-4 border-t-primary">
                <h2 className="font-display text-2xl font-bold text-card-foreground">{scene.title[language]}</h2>
                <p className="mt-2 text-lg text-card-foreground/90">{scene.text[language]}</p>
              </div>

              <fieldset>
                <legend className="font-semibold text-lg text-foreground mb-4">
                  {isMultiSelect ? LOCALIZED_CONTENT.yourReflectionMulti[language] : LOCALIZED_CONTENT.yourReflection[language]}
                </legend>
                <div className="space-y-3">
                  {options.map((choice, choiceIndex) => (
                    <ChoiceButton
                      key={choiceIndex}
                      choice={choice}
                      isSelected={(userSelections[sceneIndex] || []).includes(choice.text[language])}
                      isMultiSelect={isMultiSelect}
                      onClick={() => handleSelection(sceneIndex, choice)}
                    />
                  ))}
                </div>
              </fieldset>

              {rawAff && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-6 p-6 flex items-start space-x-4 bg-gradient-to-br from-accent to-accent/80 text-accent-foreground animate-fadeInUp rounded-xl shadow-2xl border-2 border-accent-foreground/50"
                >
                  <div className="flex-shrink-0">
                    {affIcon === 'idea' ? (
                      <Lightbulb className="w-14 h-14 text-accent-foreground transform -rotate-12" strokeWidth={2.2} />
                    ) : (
                      <Star className="w-14 h-14 text-accent-foreground transform -rotate-12" strokeWidth={2.2} />
                    )}
                  </div>
                  <p className="font-display font-bold text-3xl tracking-tight">{affText}</p>
                </div>
              )}
            </div>
          );
        })}

        <div className="pt-8 border-top border-border">
          <button
            onClick={finishStory}
            disabled={!isAllScenesCompleted}
            className="w-full flex items-center justify-center px-6 py-4 text-lg bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 transition-colors shadow-md disabled:bg-muted disabled:cursor-not-allowed disabled:shadow-none"
          >
            <CheckIcon className="w-6 h-6 mr-2" />
            {LOCALIZED_CONTENT.finishStory[language]}
          </button>
          {!isAllScenesCompleted && (
            <p className="text-center mt-3 text-sm text-foreground/80">
              {LOCALIZED_CONTENT.completeAllScenes?.[language] || 'Please make a selection in every scene to finish the story.'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryPlayer;
