import React, { useContext } from 'react';
import { AppContext } from '../App';
import CalmIcon from './icons/CalmIcon';
import Tooltip from './Tooltip';

const FloatingCalmButton: React.FC = () => {
  const { setIsBreathingGuideVisible } = useContext(AppContext);

  const handleClick = () => {
    setIsBreathingGuideVisible(true);
  };

  return (
    <Tooltip tip="Feeling stressed? Open a guided breathing exercise." position="left">
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 w-20 h-20 bg-primary rounded-full shadow-xl flex items-center justify-center text-primary-foreground transition-all duration-300 ease-in-out hover:shadow-2xl hover:bg-primary/90 transform hover:-translate-y-1 animate-pulse-calm"
        aria-label="Open breathing exercise"
      >
        <CalmIcon className="w-10 h-10" />
      </button>
    </Tooltip>
  );
};

export default FloatingCalmButton;