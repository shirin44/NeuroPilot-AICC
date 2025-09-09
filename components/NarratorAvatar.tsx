import React, { useContext } from 'react';
import { AppContext } from '../App';
import { NARRATORS } from '../constants';
import type { NarratorState } from '../types';

const NarratorAvatar: React.FC = () => {
  const { narratorRole, narratorDialogue, language, narratorState } = useContext(AppContext);

  if (!narratorRole) {
    return null;
  }

  const narrator = NARRATORS[narratorRole];
  
  // Define states that are specific actions and should not be overridden by the 'talking' state.
  const actionStates: NarratorState[] = ['intro', 'celebrating', 'thinking', 'pointing'];

  let effectiveState = narratorState;
  
  // If there's dialogue and the current state is not a specific action, switch to the 'talking' state.
  if (narratorDialogue && !actionStates.includes(narratorState)) {
    effectiveState = 'talking';
  }
  
  const avatarSrc = narrator.avatars[effectiveState] || narrator.avatars.idle;


  return (
    <div className="fixed bottom-6 left-6 z-40 w-80 pointer-events-none">
      <div className="flex items-end space-x-4">
        {/* Avatar */}
        <div className="w-28 h-28 flex-shrink-0">
          <img 
            key={avatarSrc} // Re-mounts the image on state change, re-triggering animation
            src={avatarSrc} 
            alt={narrator.name[language]} 
            className="w-full h-full object-contain drop-shadow-2xl animate-float animate-fadeIn"
          />
        </div>
        
        {/* Speech Bubble */}
        {narratorDialogue && (
           <div className="relative mb-4 animate-fadeInUp">
              <div className="bg-card p-4 rounded-xl shadow-lg border border-border text-card-foreground font-medium">
                  {narratorDialogue}
              </div>
              <div className="absolute left-0 bottom-0 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-card transform -translate-x-full translate-y-[-18px]"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NarratorAvatar;