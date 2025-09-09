import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../App';
import { LOCALIZED_CONTENT } from '../../../constants';

const BreathingCoach: React.FC = () => {
  const { language } = useContext(AppContext);
  const [instruction, setInstruction] = useState(LOCALIZED_CONTENT.breatheIn[language]);

  useEffect(() => {
    const sequence = [
      { text: LOCALIZED_CONTENT.breatheIn[language], duration: 4000 },
      { text: LOCALIZED_CONTENT.hold[language], duration: 4000 },
      { text: LOCALIZED_CONTENT.breatheOut[language], duration: 6000 },
    ];
    
    let currentIndex = 0;
    
    const cycle = () => {
        setInstruction(sequence[currentIndex].text);
        const timeoutId = setTimeout(() => {
            currentIndex = (currentIndex + 1) % sequence.length;
            cycle();
        }, sequence[currentIndex].duration);
        return timeoutId;
    };

    const timeoutId = cycle();
    
    return () => clearTimeout(timeoutId);
  }, [language]);


  return (
    <div className="flex items-center justify-center space-x-4 p-4 bg-blue-50/50 rounded-lg">
      <div 
        className="relative w-24 h-24 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-blue-400/50 rounded-full animate-breathe"></div>
        <div className="relative w-16 h-16 bg-white/50 rounded-full flex items-center justify-center">
           <p className="font-display text-lg font-bold text-blue-800 text-center">
                <span aria-live="polite" aria-atomic="true">
                  {instruction.replace('...', '')}
                </span>
            </p>
        </div>
      </div>
      <p className="text-blue-700 font-medium">Follow the guide to practice a calming breath. Let's do this together.</p>
    </div>
  );
};

export default BreathingCoach;