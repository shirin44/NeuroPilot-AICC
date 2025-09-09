import React, { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Story, StoryChoice, StoryScene } from '../../../types';
import { AppContext } from '../../../App';
import { LOCALIZED_CONTENT } from '../../../constants';
import CheckIcon from '../../icons/CheckIcon';

// --- Side Progress Bar Component ---
interface SideProgressBarProps {
  scenes: StoryScene[];
  activeSceneIndex: number;
  completedScenes: boolean[];
  onNodeClick: (index: number) => void;
}

const SideProgressBar: React.FC<SideProgressBarProps> = ({ scenes, activeSceneIndex, completedScenes, onNodeClick }) => (
    <div className="sticky top-24 h-full">
        <div className="relative h-full py-4">
            {/* Updated for better contrast on all themes */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-foreground/20"></div>
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
                            <span className={`absolute w-full h-full rounded-full ${isActive ? 'bg-primary/30 animate-progress-node-pulse' : ''}`}></span>
                             {/* Updated for better contrast on all themes */}
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
                {isSelected && <div className={`w-3 h-3 ${isMultiSelect ? 'bg-primary-foreground' : 'bg-primary-foreground'} rounded-full`}></div>}
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

    const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);
    const affirmationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    
    useEffect(() => {
        sceneRefs.current = sceneRefs.current.slice(0, story.scenes.length);
    }, [story.scenes]);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = sceneRefs.current.findIndex(ref => ref === entry.target);
                        if (index !== -1) {
                            setActiveSceneIndex(index);
                        }
                    }
                });
            },
            { rootMargin: '-40% 0px -60% 0px', threshold: 0.1 }
        );

        sceneRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            sceneRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [story.scenes.length]);


    useEffect(() => {
        if (isFinished) {
            setNarratorDialogue(story.closingAffirmation[language]);
            setNarratorState('celebrating');
        } else {
            // Narrator is silent on load, waiting for interaction.
            setNarratorDialogue('');
            setNarratorState('idle');
        }

        // Cleanup function to clear any pending narrator dialogue timeout
        return () => {
            if (affirmationTimeoutRef.current) {
                clearTimeout(affirmationTimeoutRef.current);
            }
        };
    }, [isFinished, language, setNarratorDialogue, setNarratorState, story]);

    const handleSelection = (sceneIndex: number, choice: StoryChoice) => {
        const choiceText = choice.text[language];
        const currentChoices = userSelections[sceneIndex] || [];
        const isMultiSelect = story.scenes[sceneIndex].choices.some(c => c.isMultiSelect);
        
        let newChoices: string[];
        let affirmationToShow: string | null = null;

        if (isMultiSelect) {
            if (currentChoices.includes(choiceText)) {
                newChoices = currentChoices.filter(c => c !== choiceText);
                if (newChoices.length > 0) {
                    const lastSelectedText = newChoices[newChoices.length - 1];
                    const lastChoice = story.scenes[sceneIndex].choices.find(c => c.text[language] === lastSelectedText);
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
        
        setUserSelections(prev => ({ ...prev, [sceneIndex]: newChoices }));
        setAffirmations(prev => ({ ...prev, [sceneIndex]: affirmationToShow }));

        // Make the narrator speak the affirmation
        if (affirmationTimeoutRef.current) {
            clearTimeout(affirmationTimeoutRef.current);
        }

        if (affirmationToShow) {
            const dialogueText = affirmationToShow.replace(/^[🌟💡]\s*/, '');
            setNarratorDialogue(dialogueText);
            setNarratorState('talking');
            
            affirmationTimeoutRef.current = setTimeout(() => {
                setNarratorDialogue('');
                setNarratorState('idle');
            }, 4000); // Dialogue stays for 4 seconds
        } else {
            setNarratorDialogue('');
            setNarratorState('idle');
        }
    };

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

    const handleScrollToScene = (index: number) => {
        sceneRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    };

    const completedScenes = story.scenes.map((_, index) => (userSelections[index] || []).length > 0);
    const isAllScenesCompleted = completedScenes.every(Boolean);

    if (isFinished) {
        return (
            <div className="w-full text-center p-8 md:p-16 bg-gradient-to-b from-primary/10 to-background rounded-2xl shadow-xl border border-primary/20 animate-fadeInUp">
                <div
                    className="text-8xl text-primary/70 mb-6 animate-pulse-calm"
                    style={{ animationIterationCount: 1, animationDuration: '2s' }}
                    aria-hidden="true"
                >
                    {story.closingAffirmation[language].startsWith('💡') ? '💡' : '🌟'}
                </div>
                <h2 className="font-display text-4xl font-bold text-foreground">
                    You've completed "{story.title[language]}"
                </h2>
                <p className="mt-4 text-2xl font-medium text-foreground/80 max-w-3xl mx-auto">
                    {story.closingAffirmation[language].replace(/^[💡🌟]\s*/, '')}
                </p>
                <div className="my-10 h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                <div>
                    <p className="mb-5 text-lg text-muted-foreground">Ready for the next step?</p>
                    <button
                        onClick={handleStartPractice}
                        className="px-12 py-4 bg-primary text-primary-foreground font-bold rounded-full text-xl transform hover:scale-105 transition-all duration-300 shadow-lg ring-4 ring-primary/30 hover:ring-primary/50"
                    >
                        {LOCALIZED_CONTENT.startPractice[language]}
                    </button>
                </div>
            </div>
        );
    }

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
                    const isMultiSelect = scene.choices.some(c => c.isMultiSelect);
                    const options = isMultiSelect ? scene.choices.slice(1) : scene.choices;
                    const affirmation = affirmations[sceneIndex];

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

                             {affirmation && (
                                <div role="status" aria-live="polite" className="mt-6 p-6 flex items-start space-x-4 bg-gradient-to-br from-accent to-accent/80 text-accent-foreground animate-fadeInUp rounded-xl shadow-2xl border-2 border-accent-foreground/50">
                                    <div className="flex-shrink-0 text-6xl transform -rotate-12">
                                        {affirmation.startsWith('🌟') ? '🌟' : '💡'}
                                    </div>
                                    <p className="font-display font-bold text-3xl tracking-tight">{affirmation.replace(/^[🌟💡]\s*/, '')}</p>
                                </div>
                            )}
                        </div>
                    );
                })}

                <div className="pt-8 border-t border-border">
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
                            Please make a selection in every scene to finish the story.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StoryPlayer;