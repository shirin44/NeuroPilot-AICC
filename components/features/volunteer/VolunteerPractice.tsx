import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../../App';
import { DIALOGUE, VOLUNTEER_SCENARIOS } from '../../../constants';
import NextArrowIcon from '../../icons/NextArrowIcon';
import Tooltip from '../../Tooltip';

interface Option {
    text: { [key: string]: string };
    feedback: { [key: string]: string };
    isCorrect: boolean;
}

const VolunteerPractice: React.FC = () => {
    const { language, setNarratorDialogue, setNarratorState } = useContext(AppContext);
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setNarratorDialogue(DIALOGUE.volunteerIntro[language]);
        setNarratorState('intro');
    }, [language, setNarratorDialogue, setNarratorState]);

    const handleOptionSelect = (option: Option) => {
        if (showFeedback) return;
        setSelectedOption(option);
        setShowFeedback(true);
        if(option.isCorrect) {
            setNarratorState('celebrating');
        } else {
            setNarratorState('explaining');
        }
    };
    
    const handleNext = () => {
        if (currentScenarioIndex < VOLUNTEER_SCENARIOS.length - 1) {
            setCurrentScenarioIndex(currentScenarioIndex + 1);
            setSelectedOption(null);
            setShowFeedback(false);
            setNarratorState('idle');
        } else {
            setCompleted(true);
            setNarratorDialogue("Great work! You've completed the practice scenarios. You're ready to be a great peer supporter.");
            setNarratorState('celebrating');
        }
    };
    
    const resetPractice = () => {
        setCurrentScenarioIndex(0);
        setSelectedOption(null);
        setShowFeedback(false);
        setCompleted(false);
        setNarratorState('intro');
    }

    if (completed) {
        return (
            <div className="text-center p-8 bg-gradient-to-br from-secondary to-muted rounded-xl animate-fadeInUp">
                <h2 className="font-display text-3xl font-bold text-accent">Practice Complete!</h2>
                <p className="mt-4 text-xl text-muted-foreground">
                    You've shown great empathy and understanding. Keep practicing these skills to be an amazing supporter!
                </p>
                <button
                    onClick={resetPractice}
                    className="mt-6 px-6 py-2 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90"
                >
                    Practice Again
                </button>
            </div>
        );
    }
    
    const scenario = VOLUNTEER_SCENARIOS[currentScenarioIndex];
    const progressPercentage = ((currentScenarioIndex + 1) / VOLUNTEER_SCENARIOS.length) * 100;

    return (
        <div>
             <div className="mb-6">
                <div className="flex justify-between items-center mb-1">
                    <h2 className="font-display text-2xl font-bold">Empathy Practice</h2>
                     <span className="text-sm font-semibold text-muted-foreground">
                        Scenario {currentScenarioIndex + 1} of {VOLUNTEER_SCENARIOS.length}
                    </span>
                </div>
                <div className="w-full bg-foreground/10 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full transition-all duration-500" style={{ width: `${progressPercentage}%` }}></div>
                </div>
            </div>
            
            <div className="p-6 bg-card rounded-xl shadow-md border border-border">
                <p className="font-semibold text-lg text-foreground leading-relaxed">
                    {scenario.scenario[language]}
                </p>
            </div>

            <div className="mt-6 space-y-3">
                {scenario.options.map((option, index) => {
                    const isSelected = selectedOption?.text[language] === option.text[language];
                    let borderColor = 'border-border';
                    if (showFeedback) {
                        if (option.isCorrect) {
                            borderColor = 'border-green-500';
                        } else if (isSelected) {
                            borderColor = 'border-yellow-500';
                        }
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => handleOptionSelect(option)}
                            disabled={showFeedback}
                            className={`w-full text-left flex items-start p-6 bg-card rounded-lg border-2 transition-all ${borderColor} ${!showFeedback ? 'hover:border-primary hover:bg-primary/10' : 'cursor-not-allowed'}`}
                        >
                            <span className={`mr-4 font-bold text-lg ${showFeedback && option.isCorrect ? 'text-green-600' : showFeedback && isSelected ? 'text-yellow-600' : 'text-primary'}`}>
                                {String.fromCharCode(65 + index)}
                            </span>
                            <span className="text-muted-foreground">{option.text[language]}</span>
                        </button>
                    );
                })}
            </div>
            
            {showFeedback && selectedOption && (
                <div className={`mt-6 p-4 rounded-lg border-l-4 ${selectedOption.isCorrect ? 'bg-green-50 border-green-500' : 'bg-yellow-50 border-yellow-500'} animate-fadeInUp`}>
                    <h4 className={`font-bold ${selectedOption.isCorrect ? 'text-green-800' : 'text-yellow-800'}`}>
                        {selectedOption.isCorrect ? 'Great Choice!' : 'Consider this:'}
                    </h4>
                    <p className={`mt-1 ${selectedOption.isCorrect ? 'text-green-700' : 'text-yellow-700'}`}>
                        {selectedOption.feedback[language]}
                    </p>
                </div>
            )}
            
            {showFeedback && (
                <Tooltip tip="Continue to the next scenario.">
                    <button
                        onClick={handleNext}
                        className="mt-6 w-full flex items-center justify-center px-8 py-4 text-lg bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md"
                    >
                        {currentScenarioIndex < VOLUNTEER_SCENARIOS.length - 1 ? 'Next Scenario' : 'Finish Practice'}
                        <NextArrowIcon className="w-5 h-5 ml-2" />
                    </button>
                </Tooltip>
            )}
        </div>
    );
};

export default VolunteerPractice;