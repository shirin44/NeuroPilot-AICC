import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Narrator } from '../types';
import { Language } from '../types';
import { AppContext } from '../App';

interface NarratorCardProps {
  narrator: Narrator;
}

const NarratorCard: React.FC<NarratorCardProps> = ({ narrator }) => {
  const navigate = useNavigate();
  const { language, setNarratorRole, setMode } = React.useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);
  const themeClass = `theme-${narrator.theme}`;

  const handleSelect = () => {
    setNarratorRole(narrator.role);
    setMode(null); // Reset mode when selecting a new narrator
    navigate('/mode-selection');
  };

  const avatarSrc = isHovered 
    ? (narrator.avatars.intro || narrator.avatars.idle) 
    : narrator.avatars.idle;

  return (
    <button
        type="button"
        className={`group relative ${themeClass} bg-card rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer border border-border text-left w-full`}
        onClick={handleSelect}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
       {isHovered && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-max max-w-xs z-10">
              <div className="bg-foreground text-background text-sm font-semibold px-4 py-2 rounded-lg shadow-lg animate-fadeInUp">
                  {narrator.hover[language]}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-foreground transform translate-y-full"></div>
              </div>
          </div>
        )}
      <div className="p-8">
        <div className="flex items-center space-x-4">
          <div className="h-20 w-20 rounded-full flex-shrink-0 bg-muted overflow-hidden ring-4 ring-card">
            <img className="h-full w-full object-cover" src={avatarSrc} alt={`${narrator.name[language]} avatar`} />
          </div>
          <div>
            <div className={`font-display text-xl font-bold text-card-foreground`}>{narrator.name[language]}</div>
            <p className={`text-sm font-medium text-primary`}>{narrator.role}</p>
          </div>
        </div>
        <p className={`mt-4 text-card-foreground`}>{narrator.intro[language]}</p>
      </div>
      <div className={`absolute inset-0 bg-primary/90 group-hover:bg-opacity-90 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100`}>
        <span className="text-primary-foreground font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Select & Begin</span>
      </div>
    </button>
  );
};

export default NarratorCard;