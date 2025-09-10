import React, { useState, useContext, useEffect } from 'react';
import { getInterviewFeedback, getImprovementSuggestion } from '../../../services/geminiService';
import type { StarFeedback } from '../../../types';
import StarMethodIcon from '../../icons/StarMethodIcon';
import { AppContext } from '../../../App';
import { DIALOGUE } from '../../../constants';
import VoiceInputButton from '../../VoiceInputButton';
import Tooltip from '../../Tooltip';
import CheckIcon from '../../icons/CheckIcon';
import NextArrowIcon from '../../icons/NextArrowIcon';
import BookmarkIcon from '../../icons/BookmarkIcon';
import LightbulbIcon from '../../icons/LightbulbIcon';

type FlowStep = 'setup' | 'practice' | 'summary';
type PracticeType = 'STAR Interview' | 'Common Questions' | 'Small Talk';
type StarComponent = 'situation' | 'task' | 'action' | 'result';


const MAX_ANSWER_LENGTH = 2000;

const questionSets: Record<PracticeType, string[]> = {
  'STAR Interview': [
    "Tell me about a time you worked effectively under pressure.",
    "Describe a situation where you had to work with a difficult coworker.",
    "Give an example of a goal you reached and tell me how you achieved it.",
    "Tell me about a time you made a mistake. What did you do to correct it?",
  ],
  'Common Questions': [
    "Tell me about yourself.",
    "What are your biggest strengths?",
    "What are your biggest weaknesses?",
    "Why do you want to work here?",
  ],
  'Small Talk': [
    "How was your weekend?",
    "Do you have any plans for the upcoming holiday?",
    "What do you enjoy doing outside of work?",
  ]
};

const StarRating: React.FC<{ score: number; size?: string }> = ({ score, size = 'w-5 h-5' }) => (
    <div role="img" aria-label={`${score} out of 5 stars`} className="flex">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`${size} ${i < score ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.363 2.44a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.363-2.44a1 1 0 00-1.175 0l-3.363 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
        ))}
    </div>
);

const FeedbackDisplay: React.FC<{
    feedback: StarFeedback;
    suggestions: Partial<Record<StarComponent, string>>;
    isFetchingSuggestions: boolean;
}> = ({ feedback, suggestions, isFetchingSuggestions }) => {
    const feedbackItems: {
        label: string;
        data: { score: number; feedback: string };
        icon: StarComponent;
        suggestion?: string;
        themeClasses: {
            border: string;
            bg: string;
            text: string;
        };
    }[] = [
        { label: 'Situation', data: feedback.situation, icon: 'situation', suggestion: suggestions.situation, themeClasses: { border: 'border-primary/20', bg: 'bg-primary/10', text: 'text-primary' } },
        { label: 'Task', data: feedback.task, icon: 'task', suggestion: suggestions.task, themeClasses: { border: 'border-accent/20', bg: 'bg-accent/10', text: 'text-accent' } },
        { label: 'Action', data: feedback.action, icon: 'action', suggestion: suggestions.action, themeClasses: { border: 'border-success/20', bg: 'bg-success/10', text: 'text-success' } },
        { label: 'Result', data: feedback.result, icon: 'result', suggestion: suggestions.result, themeClasses: { border: 'border-warning/20', bg: 'bg-warning/10', text: 'text-warning' } },
    ];

    return (
        <div className="mt-6 space-y-6">
            <div className="rounded-xl shadow-lg overflow-hidden border border-border">
                <div className="p-4 bg-gradient-to-r from-secondary to-muted flex items-center justify-between">
                    <h3 className="font-display font-bold text-2xl text-secondary-foreground">Overall Feedback</h3>
                    <StarRating score={feedback.overall.score} size="w-6 h-6" />
                </div>
                <div className="p-6 bg-card">
                    <p className="text-lg text-card-foreground">{feedback.overall.feedback}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {feedbackItems.map(item => {
                    return (
                        <div key={item.label} className={`rounded-xl shadow-md overflow-hidden border ${item.themeClasses.border}`}>
                            <div className={`p-3 ${item.themeClasses.bg} flex items-center justify-between`}>
                                <div className="flex items-center space-x-3">
                                    <StarMethodIcon type={item.icon} className={`w-7 h-7 ${item.themeClasses.text}`} />
                                    <h4 className={`font-display font-bold text-lg ${item.themeClasses.text}`}>{item.label}</h4>
                                </div>
                                <StarRating score={item.data.score} />
                            </div>
                            <div className="p-4 bg-card">
                                <p className="text-muted-foreground">{item.data.feedback}</p>
                                {item.suggestion && (
                                    <div className="mt-3 pt-3 border-t border-dashed border-border">
                                        <h5 className="flex items-center font-bold text-sm text-yellow-800">
                                            <LightbulbIcon className="w-4 h-4 mr-1.5 text-yellow-600"/>
                                            Example for Improvement:
                                        </h5>
                                        <p className="text-sm text-muted-foreground italic mt-1 pl-1">
                                            "{item.suggestion}"
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            {isFetchingSuggestions && (
                <div className="text-center text-muted-foreground mt-4 animate-pulse">
                    Generating specific examples...
                </div>
            )}
        </div>
    );
};


const InterviewPractice: React.FC = () => {
  const { language, setNarratorDialogue, setNarratorState } = useContext(AppContext);
  const [flowStep, setFlowStep] = useState<FlowStep>('setup');
  const [practiceType, setPracticeType] = useState<PracticeType>('STAR Interview');
  const [questions, setQuestions] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<StarFeedback | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isCalmMode, setIsCalmMode] = useState(false);
  const [suggestions, setSuggestions] = useState<Partial<Record<StarComponent, string>>>({});
  const [isFetchingSuggestions, setIsFetchingSuggestions] = useState(false);

  useEffect(() => {
    let dialogueKey = '';
    switch(flowStep) {
        case 'setup':
            dialogueKey = 'jobseekerSetup';
            setNarratorState('pointing');
            break;
        case 'practice':
            dialogueKey = 'jobseekerPractice';
            setNarratorState('idle');
            break;
        case 'summary':
            dialogueKey = feedback?.overall.score && feedback.overall.score >= 4 ? 'jobseekerSummary' : 'jobseekerFeedback';
            if (feedback?.overall.score && feedback.overall.score >= 4) {
              setNarratorState('celebrating');
            } else {
              setNarratorState('explaining');
            }
            break;
    }
     if (dialogueKey) {
        setNarratorDialogue(DIALOGUE[dialogueKey][language]);
    }
  }, [flowStep, language, setNarratorDialogue, feedback, setNarratorState]);

  useEffect(() => {
    if (isLoading) {
      setNarratorState('thinking');
    }
  }, [isLoading, setNarratorState]);


  const startPractice = (type: PracticeType) => {
    setPracticeType(type);
    setQuestions(questionSets[type]);
    setCurrentQuestionIndex(0);
    setAnswer('');
    setFeedback(null);
    setError('');
    setSuggestions({});
    setFlowStep('practice');
  };

  const handleSubmitAnswer = async () => {
    if (!answer.trim()) {
      setError('Please provide an answer.');
      return;
    }
    setIsLoading(true);
    setError('');
    setSuggestions({});
    try {
      const fb = await getInterviewFeedback(questions[currentQuestionIndex], answer);
      setFeedback(fb);
      setFlowStep('summary');

      // Fetch suggestions for weak areas in parallel
      const componentsToImprove: StarComponent[] = (Object.keys(fb) as (keyof StarFeedback)[])
        .filter(key => key !== 'overall' && fb[key].score < 4) as StarComponent[];

      if (componentsToImprove.length > 0) {
        setIsFetchingSuggestions(true);
        const suggestionPromises = componentsToImprove.map(comp =>
          getImprovementSuggestion(questions[currentQuestionIndex], answer, (comp.charAt(0).toUpperCase() + comp.slice(1)) as any)
            .then(res => ({ [comp]: res.suggestion }))
        );
        
        const settledSuggestions = await Promise.all(suggestionPromises);
        const newSuggestions = settledSuggestions.reduce((acc, curr) => ({ ...acc, ...curr }), {});
        setSuggestions(newSuggestions);
        setIsFetchingSuggestions(false);
      }

    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setFlowStep('practice');
        setAnswer('');
        setFeedback(null);
        setError('');
        setSuggestions({});
    } else {
        alert("You've completed all questions in this set!");
        resetPractice();
    }
  };

  const resetPractice = () => {
    setFlowStep('setup');
    setFeedback(null);
    setSuggestions({});
  };
  
  const handleVoiceInput = (text: string) => {
    setAnswer(prev => (prev ? prev.trim() + ' ' : '') + text);
  };

  if (flowStep === 'setup') {
    return (
      <div>
        <h2 className="font-display text-2xl font-bold mb-4">Choose Your Practice Type</h2>
        <p className="mb-6 text-muted-foreground">Choose how you'd like to practice today.</p>
        
        <div className="space-y-4">
            {(Object.keys(questionSets) as PracticeType[]).map(type => (
                 <button
                    key={type}
                    onClick={() => startPractice(type)}
                    className="w-full text-left p-6 bg-card hover:bg-primary/10 border border-border rounded-lg transition-colors shadow-sm"
                 >
                    <h3 className="font-semibold text-lg">{type}</h3>
                    <p className="text-sm text-muted-foreground">Practice with common {type.toLowerCase()} questions.</p>
                 </button>
            ))}
        </div>
        
        <div className="mt-8 flex items-center space-x-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
          <input 
            type="checkbox" 
            id="calm-mode" 
            checked={isCalmMode} 
            onChange={() => setIsCalmMode(!isCalmMode)}
            className="h-5 w-5 rounded text-accent focus:ring-ring border-border"
          />
          <div>
            <label htmlFor="calm-mode" className="font-semibold text-accent/90">Enable Calm Practice Mode</label>
            <p className="text-sm text-accent/80">Slower pace with breathing reminders.</p>
          </div>
        </div>
      </div>
    )
  }

  if (flowStep === 'practice' || flowStep === 'summary') {
    return (
      <div>
        <button onClick={resetPractice} className="mb-4 text-sm font-semibold text-primary hover:underline">&larr; Back to Setup</button>
        <div className="p-4 bg-primary/10 rounded-lg">
            <p className="font-semibold text-primary">Question {currentQuestionIndex + 1}/{questions.length}:</p>
            <p className="text-lg text-foreground">{questions[currentQuestionIndex]}</p>
        </div>

        {isCalmMode && (
          <div className="my-4 p-3 bg-secondary text-secondary-foreground rounded-lg text-center font-medium">
            Take a deep breath. You're doing great.
          </div>
        )}
        
        <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
                <label htmlFor="answer" className="block text-lg font-medium text-muted-foreground">Your Answer:</label>
                <VoiceInputButton onTextReceived={handleVoiceInput} />
            </div>
            <textarea
                id="answer"
                rows={10}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type or use the microphone to speak your answer..."
                className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-ring bg-card text-card-foreground placeholder:text-muted-foreground"
                disabled={isLoading || flowStep === 'summary'}
                maxLength={MAX_ANSWER_LENGTH}
            />
            <div className={`text-right text-sm mt-1 ${answer.length > MAX_ANSWER_LENGTH - 100 ? 'text-red-600' : 'text-muted-foreground'}`}>
                {answer.length} / {MAX_ANSWER_LENGTH}
            </div>
        </div>
        
        {error && <p className="mt-2 text-red-600">{error}</p>}
        
        {flowStep === 'practice' && (
            <Tooltip tip="Get instant AI feedback on your STAR answer.">
                <button
                    onClick={handleSubmitAnswer}
                    disabled={isLoading}
                    className="mt-6 w-full flex items-center justify-center px-8 py-4 text-lg bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 transition-colors shadow-md disabled:bg-muted"
                >
                    <CheckIcon className="w-6 h-6 mr-2" />
                    {isLoading ? 'Getting Feedback...' : 'Submit for Feedback'}
                </button>
            </Tooltip>
        )}

        {isLoading && <div className="mt-4 text-center">Analyzing your answer with care...</div>}
        
        {flowStep === 'summary' && feedback && (
            <div className="mt-8">
                <h3 className="font-display text-2xl font-bold mb-4">Session Summary</h3>
                <FeedbackDisplay feedback={feedback} suggestions={suggestions} isFetchingSuggestions={isFetchingSuggestions} />
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <Tooltip tip="Continue to the next question in the set.">
                      <button onClick={nextQuestion} className="flex-1 flex items-center justify-center px-8 py-4 text-lg bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors">
                          {currentQuestionIndex < questions.length - 1 ? 'Next Question' : "Finish Practice"}
                          <NextArrowIcon className="w-5 h-5 ml-2" />
                      </button>
                    </Tooltip>
                    <Tooltip tip="Save this question to practice again later.">
                     <button onClick={() => alert("Question bookmarked!")} className="flex-1 flex items-center justify-center px-8 py-4 text-lg bg-card border border-border text-foreground font-bold rounded-lg hover:bg-muted transition-colors">
                        <BookmarkIcon className="w-5 h-5 mr-2" />
                        Bookmark for Retry
                    </button>
                    </Tooltip>
                </div>
            </div>
        )}
      </div>
    );
  }
  
  return null;
};

export default InterviewPractice;