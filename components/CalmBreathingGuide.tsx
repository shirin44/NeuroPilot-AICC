import React, { useState, useEffect, useContext, useRef } from 'react';
import { AppContext } from '../App';
import { LOCALIZED_CONTENT, DIALOGUE, NARRATORS, CALM_PRACTICES } from '../constants';
import { NarratorRole } from '../types';

type Practice = 'bloom' | 'tracing' | 'flow' | 'tap';

// --- Icons for the Menu (inlined to avoid new files) ---
const BloomIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-12h2v4h-2zm0 6h2v2h-2z" /></svg>;
const TraceIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v2H3V3zm0 16h18v2H3v-2zm16-4.08V7.08L12 12l7 4.92zM5 7.08v9.84L12 12 5 7.08zM3 7h2v10H3V7zm16 0h2v10h-2V7z" /></svg>;
const FlowIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 10c.2 0 .3-.1.4-.2.1-.1.2-.3.2-.4 0-.3-.1-.5-.3-.7l-2.8-2.8c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.3 1.3H5c-.6 0-1 .4-1 1s.4 1 1 1h14.2l-1.3 1.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l2.8-2.8c.2-.2.3-.4.3-.6z" /></svg>;
const TapIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM10 8v8l6-4-6-4z" /></svg>;

const practiceIcons: Record<Practice, React.FC> = { bloom: BloomIcon, tracing: TraceIcon, flow: FlowIcon, tap: TapIcon };

// --- Practice Implementations ---

const BreathingBloom: React.FC = () => {
  const { language } = useContext(AppContext);
  const [instruction, setInstruction] = useState(LOCALIZED_CONTENT.breatheIn[language]);
  const [animationClass, setAnimationClass] = useState('animate-bloom-inhale');
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const cleanup = () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }
    };

    const sequence = [
      { instruction: LOCALIZED_CONTENT.breatheIn[language], animation: 'animate-bloom-inhale', duration: 4000 },
      { instruction: LOCALIZED_CONTENT.hold[language], animation: '', duration: 4000 },
      { instruction: LOCALIZED_CONTENT.breatheOut[language], animation: 'animate-bloom-exhale', duration: 6000 },
    ];
    
    let currentIndex = 0;
    
    const cycle = () => {
      cleanup(); 

      const currentStep = sequence[currentIndex];
      setInstruction(currentStep.instruction);
      
      if (currentStep.animation) {
          setAnimationClass(currentStep.animation);
      }

      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(currentStep.instruction);
        utterance.lang = language === 'en' ? 'en-US' : 'vi-VN';
        window.speechSynthesis.speak(utterance);
      }
      
      timeoutIdRef.current = setTimeout(() => {
        currentIndex = (currentIndex + 1) % sequence.length;
        cycle();
      }, currentStep.duration);
    };

    cycle();

    return cleanup;
  }, [language]);

  const FlowerSVG = () => (
    <div className={`relative w-64 h-64 ${animationClass}`}>
        <svg viewBox="-50 -50 100 100" className="absolute inset-0 w-full h-full text-pink-400 opacity-50" style={{ fill: 'currentColor' }}>
            {[15, 75, 135, 195, 255, 315].map(angle => (
                <path key={angle} transform={`rotate(${angle})`} d="M0,0 C25,25 25,50 0,50 C-25,50 -25,25 0,0" />
            ))}
        </svg>
        <svg viewBox="-50 -50 100 100" className="absolute inset-0 w-full h-full text-pink-300 opacity-70 transform scale-90" style={{ fill: 'currentColor' }}>
            {[0, 60, 120, 180, 240, 300].map(angle => (
                <path key={angle} transform={`rotate(${angle})`} d="M0,0 C25,25 25,50 0,50 C-25,50 -25,25 0,0" />
            ))}
        </svg>
        <svg viewBox="-50 -50 100 100" className="absolute inset-0 w-full h-full text-pink-200 transform scale-75" style={{ fill: 'currentColor' }}>
            {[30, 90, 150, 210, 270, 330].map(angle => (
                <path key={angle} transform={`rotate(${angle})`} d="M0,0 C20,20 20,40 0,40 C-20,40 -20,20 0,0" />
            ))}
        </svg>
    </div>
  );

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <FlowerSVG />
      <p className="absolute font-display text-3xl font-bold text-white text-center pointer-events-none" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
        <span aria-live="polite" aria-atomic="true">{instruction}</span>
      </p>
    </div>
  );
};

const TracingBreaths: React.FC = () => {
  const { language } = useContext(AppContext);
  const [instruction, setInstruction] = useState(LOCALIZED_CONTENT.breatheIn[language]);
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const cleanup = () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }
    };

    const sequence = [
      { instruction: LOCALIZED_CONTENT.breatheIn[language], duration: 4000 },
      { instruction: LOCALIZED_CONTENT.hold[language], duration: 4000 },
      { instruction: LOCALIZED_CONTENT.breatheOut[language], duration: 4000 },
      { instruction: LOCALIZED_CONTENT.hold[language], duration: 4000 },
    ];

    let currentIndex = 0;
    const cycle = () => {
      cleanup();

      const currentStep = sequence[currentIndex];
      setInstruction(currentStep.instruction);
      
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(currentStep.instruction);
        utterance.lang = language === 'en' ? 'en-US' : 'vi-VN';
        window.speechSynthesis.speak(utterance);
      }

      timeoutIdRef.current = setTimeout(() => {
        currentIndex = (currentIndex + 1) % sequence.length;
        cycle();
      }, currentStep.duration);
    };

    cycle();

    return cleanup;
  }, [language]);

  const dotStyle: React.CSSProperties = {
    offsetPath: "path('M 10,10 H 190 V 190 H 10 Z')",
    animation: 'trace-path 16s linear infinite',
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
        <svg width="200" height="200" viewBox="0 0 200 200" className="overflow-visible">
            <path d="M 10,10 H 190 V 190 H 10 Z" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeLinecap="round" fill="none" />
            <circle cx="0" cy="0" r="8" fill="white" style={dotStyle} filter="drop-shadow(0 0 6px white)" />
        </svg>
        <p className="absolute font-display text-3xl font-bold text-white text-center pointer-events-none" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            <span aria-live="polite" aria-atomic="true">{instruction}</span>
        </p>
    </div>
  );
};

const GentleColorFlow: React.FC = () => {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalIdRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Effect for handling the calming audio
  useEffect(() => {
    // This cleanup function is crucial to stop the audio when the component unmounts.
    const cleanupAudio = () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(console.error);
        audioCtxRef.current = null;
      }
    };

    // Initialize AudioContext on user interaction (implicitly handled by starting the practice)
    if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const audioCtx = audioCtxRef.current;
    
    // A simple, calming arpeggio (C Major 7)
    const notes = [261.63, 329.63, 392.00, 493.88]; // C4, E4, G4, B4
    let noteIndex = 0;

    const playNote = () => {
        if (!audioCtx || audioCtx.state === 'closed') return;

        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(notes[noteIndex], audioCtx.currentTime);
        
        // Gentle attack and decay for a soft "pad" sound
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 1.0); // 1s fade in
        gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 2.5); // 1.5s fade out
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 2.8);

        noteIndex = (noteIndex + 1) % notes.length;
    };
    
    playNote(); // Play the first note immediately
    intervalIdRef.current = setInterval(playNote, 2800); // Play a new note every 2.8 seconds

    return cleanupAudio;
  }, []);

  // Aurora / Lava Lamp Visual
  return (
    <div className="absolute inset-0 overflow-hidden bg-gray-900">
        <div className="relative w-full h-full">
            <div 
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-50 mix-blend-screen filter blur-3xl"
              style={{ animation: 'flow-blob-1 20s infinite ease-in-out' }}
            />
            <div 
              className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-500 rounded-full opacity-50 mix-blend-screen filter blur-3xl"
              style={{ animation: 'flow-blob-2 25s infinite ease-in-out' }}
            />
             <div 
              className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-green-400 rounded-full opacity-40 mix-blend-screen filter blur-3xl"
              style={{ animation: 'flow-blob-3 18s infinite ease-in-out' }}
            />
        </div>
    </div>
  );
};


const SteadyRhythmTap: React.FC = () => {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalIdRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const cleanup = () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(console.error);
        audioCtxRef.current = null;
      }
    };

    // Create a new AudioContext if one doesn't exist or is closed
    const getAudioContext = () => {
      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      return audioCtxRef.current;
    };

    intervalIdRef.current = setInterval(() => {
      const audioCtx = getAudioContext();
      if (!audioCtx) return;

      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.type = 'sine';
      
      // Softer, lower frequency for a heartbeat-like thump
      oscillator.frequency.setValueAtTime(80, audioCtx.currentTime); 
      oscillator.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.15);

      // Softer gain envelope
      gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.02); // Lower peak gain
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5); // Slightly longer decay

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.5);
    }, 1000); // 60 BPM is a calm, steady rhythm

    return cleanup;
  }, []);

  const rippleStyle = (delay: string): React.CSSProperties => ({
    animation: `ripple 2s cubic-bezier(0.2, 0.6, 0.8, 1) infinite`,
    animationDelay: delay,
    transformOrigin: '50% 50%',
  });

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="relative w-72 h-72">
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100">
          {/* Synchronized ripples: A new ripple starts with each 1s beat */}
          <circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.4)" style={rippleStyle('0s')} />
          <circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.4)" style={rippleStyle('1s')} />
        </svg>
      </div>
       <p className="absolute font-display text-2xl font-bold text-white text-center pointer-events-none" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
          Focus on the steady rhythm
      </p>
    </div>
  );
};


// --- Main Component & Menu ---
const CalmBreathingGuide: React.FC = () => {
  const { language, setIsBreathingGuideVisible } = useContext(AppContext);
  const [activePractice, setActivePractice] = useState<Practice | null>(null);
  const narratorData = NARRATORS[NarratorRole.Jobseeker];
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setIsBreathingGuideVisible(false);
        }
    };
    document.addEventListener('keydown', handleKeyDown);
    
    // Master cleanup for any residual audio when the entire guide is closed.
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }
    }
  }, [setIsBreathingGuideVisible]);

  const PracticeCard: React.FC<{ practice: Practice; onClick: () => void }> = ({ practice, onClick }) => {
    const content = CALM_PRACTICES[practice];
    const Icon = practiceIcons[practice];
    return (
      <button onClick={onClick} className="w-full text-left p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-colors flex items-start space-x-4">
        <div className="flex-shrink-0 w-8 h-8 text-white opacity-80 mt-1"><Icon /></div>
        <div>
            <h3 className="font-bold text-lg text-white">{content.title[language]}</h3>
            <p className="text-sm text-white/80">{content.description[language]}</p>
        </div>
      </button>
    );
  };

  const renderContent = () => {
    if (!activePractice) {
      return (
        <div className="w-full max-w-md space-y-4">
            {(Object.keys(CALM_PRACTICES) as Practice[]).map(p => 
                <PracticeCard key={p} practice={p} onClick={() => setActivePractice(p)} />
            )}
        </div>
      );
    }
    const PracticeComponent = {
        bloom: BreathingBloom,
        tracing: TracingBreaths,
        flow: GentleColorFlow,
        tap: SteadyRhythmTap,
    }[activePractice];
    
    const practiceInfo = CALM_PRACTICES[activePractice];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            {/* UI with improved contrast */}
            <div className="absolute top-4 left-4 z-10">
                <button onClick={() => setActivePractice(null)} className="px-4 py-2 bg-black/30 text-white text-sm font-semibold rounded-full hover:bg-black/50 backdrop-blur-sm">&larr; Back to Menu</button>
            </div>
            <div className="absolute top-4 text-center pointer-events-none">
                <h2 className="text-xl font-bold text-white p-2 rounded-lg bg-black/20 backdrop-blur-sm">{practiceInfo.title[language]}</h2>
            </div>
            <PracticeComponent />
        </div>
    );
  };

  return (
    <div 
      className="fixed inset-0 bg-brand-neutral-900/80 backdrop-blur-sm z-[100] flex flex-col items-center justify-center p-4 transition-opacity duration-300 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsBreathingGuideVisible(false);
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Calm Breathing Guide"
    >
        {!activePractice && (
            <div className="absolute top-10 flex flex-col items-center pointer-events-none">
                <div className="relative mb-2">
                    <div className="bg-white/90 text-brand-neutral-900 font-semibold px-4 py-2 rounded-lg shadow-lg">
                        {DIALOGUE.jobseekerCalm[language]}
                    </div>
                     <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/90 transform translate-y-full"></div>
                </div>
                <img src={narratorData.avatars.idle} alt={narratorData.name[language]} className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover bg-gray-200" />
            </div>
        )}
      
      {renderContent()}

      <p className="absolute bottom-4 text-white/70 text-sm">Click the background or press ESC to close</p>
    </div>
  );
};

export default CalmBreathingGuide;