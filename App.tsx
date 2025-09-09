

import React, { useState, useMemo, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './pages/DashboardPage';
import { Language, NarratorRole, AppMode, NarratorAppEmotion } from './types';
import CalmBreathingGuide from './components/CalmBreathingGuide';
import ModeSelectionPage from './pages/ModeSelectionPage';
import { NARRATORS } from './constants';

export const AppContext = React.createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  narratorRole: NarratorRole | null;
  setNarratorRole: (role: NarratorRole | null) => void;
  mode: AppMode | null;
  setMode: (mode: AppMode | null) => void;
  isBreathingGuideVisible: boolean;
  setIsBreathingGuideVisible: (visible: boolean) => void;
  narratorDialogue: string;
  setNarratorDialogue: (dialogue: string) => void;
  narratorState: NarratorAppEmotion;
  setNarratorState: (state: NarratorAppEmotion) => void;
}>({
  language: Language.EN,
  setLanguage: () => {},
  narratorRole: null,
  setNarratorRole: () => {},
  mode: null,
  setMode: () => {},
  isBreathingGuideVisible: false,
  setIsBreathingGuideVisible: () => {},
  narratorDialogue: '',
  setNarratorDialogue: () => {},
  narratorState: 'neutral',
  setNarratorState: () => {},
});

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [narratorRole, setNarratorRole] = useState<NarratorRole | null>(null);
  const [mode, setMode] = useState<AppMode | null>(null);
  const [isBreathingGuideVisible, setIsBreathingGuideVisible] = useState(false);
  const [narratorDialogue, setNarratorDialogue] = useState('');
  const [narratorState, setNarratorState] = useState<NarratorAppEmotion>('neutral');

  useEffect(() => {
    // Apply theme class to body
    const body = document.body;
    body.classList.remove('theme-blue', 'theme-red', 'theme-purple', 'theme-green');
    
    if (narratorRole) {
      const theme = NARRATORS[narratorRole].theme;
      body.classList.add(`theme-${theme}`);
    } else {
      // When no role is selected (e.g., on homepage), remove any specific theme class
      // to fall back to the :root default (which is blue).
    }
  }, [narratorRole]);

  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    narratorRole,
    setNarratorRole,
    mode,
    setMode,
    isBreathingGuideVisible,
    setIsBreathingGuideVisible,
    narratorDialogue,
    setNarratorDialogue,
    narratorState, 
    setNarratorState,
  }), [language, narratorRole, mode, isBreathingGuideVisible, narratorDialogue, narratorState]);

  return (
    <AppContext.Provider value={contextValue}>
      {isBreathingGuideVisible && <CalmBreathingGuide />}
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mode-selection" element={<ModeSelectionPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </HashRouter>
    </AppContext.Provider>
  );
};

export default App;