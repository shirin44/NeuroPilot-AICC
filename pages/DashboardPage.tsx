import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { AppContext } from '../App';
import { NarratorRole } from '../types';
import { NARRATORS, LOCALIZED_CONTENT, DIALOGUE, STORY_CONTENT } from '../constants';
import InterviewPractice from '../components/features/jobseeker/InterviewPractice';
import SessionHistory from '../components/features/jobseeker/SessionHistory';
import SpeakerIcon from '../components/icons/SpeakerIcon';
import QuestionCleaner from '../components/features/employer/QuestionCleaner';
import ParentGuidance from '../components/features/parent/ParentGuidance';
import StoryPlayer from '../components/features/common/StoryPlayer';
import PracticeIcon from '../components/icons/PracticeIcon';
import HistoryIcon from '../components/icons/HistoryIcon';
import Tooltip from '../components/Tooltip';
import VolunteerPractice from '../components/features/volunteer/VolunteerPractice';

const DashboardPage: React.FC = () => {
  const { narratorRole, mode, language, setNarratorDialogue, setNarratorState } = useContext(AppContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('practice');

  useEffect(() => {
    if (!narratorRole) {
      navigate('/');
    } else if (!mode) {
      navigate('/mode-selection');
    } else if (mode === 'practice') { // Only show intro for practice mode
        const narrator = NARRATORS[narratorRole];
        setNarratorDialogue(narrator.intro[language]);
        setNarratorState('intro'); // Wave hello
        const timer = setTimeout(() => setNarratorState('idle'), 4000); // Back to idle after animation
        return () => clearTimeout(timer);
    }
  }, [narratorRole, mode, navigate, language, setNarratorDialogue, setNarratorState]);

  if (!narratorRole || !mode) {
    return null; // or a loading spinner
  }

  const narrator = NARRATORS[narratorRole];

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language === 'en' ? 'en-US' : 'vi-VN';
        window.speechSynthesis.cancel(); // Stop any currently speaking utterances
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Sorry, your browser doesn't support text-to-speech.");
    }
  };

  const renderPracticeContent = () => {
    switch (narratorRole) {
      case NarratorRole.Jobseeker:
        return (
            <div>
                <div role="tablist" aria-label="Practice options" className="mb-6 border-b border-border">
                    <nav className="flex space-x-6">
                        <button 
                            role="tab"
                            id="practice-tab"
                            aria-controls="practice-panel"
                            aria-selected={activeTab === 'practice'}
                            onClick={() => setActiveTab('practice')}
                            className={`flex items-center py-3 px-1 font-semibold transition-colors ${activeTab === 'practice' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-primary'}`}
                        >
                            <PracticeIcon className="w-5 h-5 mr-2" />
                            {LOCALIZED_CONTENT.practice[language]}
                        </button>
                        <button 
                            role="tab"
                            id="history-tab"
                            aria-controls="history-panel"
                            aria-selected={activeTab === 'history'}
                            onClick={() => setActiveTab('history')}
                            className={`flex items-center py-3 px-1 font-semibold transition-colors ${activeTab === 'history' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-primary'}`}
                        >
                            <HistoryIcon className="w-5 h-5 mr-2" />
                            {LOCALIZED_CONTENT.history[language]}
                        </button>
                    </nav>
                </div>
                {activeTab === 'practice' && (
                    <div id="practice-panel" role="tabpanel" tabIndex={0} aria-labelledby="practice-tab">
                        <InterviewPractice />
                    </div>
                )}
                {activeTab === 'history' && (
                    <div id="history-panel" role="tabpanel" tabIndex={0} aria-labelledby="history-tab">
                        <SessionHistory />
                    </div>
                )}
            </div>
        );
      case NarratorRole.Employer:
        return <QuestionCleaner />;
      case NarratorRole.Parent:
        return <ParentGuidance />;
      case NarratorRole.Volunteer:
        return <VolunteerPractice />;
      default:
        return <p>No content available for this role.</p>;
    }
  };

  const renderContent = () => {
    if (mode === 'practice') {
        return renderPracticeContent();
    }
     if (mode === 'story') {
        const story = STORY_CONTENT[narratorRole];
        return <StoryPlayer story={story} />;
    }
    return null;
  };

  return (
    <Layout>
      <div className="space-y-8">
        {mode === 'practice' && (
            <header className="bg-card p-6 rounded-2xl shadow-lg flex items-start space-x-6">
                <div className={`w-24 h-24 rounded-full border-4 border-accent bg-muted overflow-hidden flex-shrink-0`}>
                   <img src={narrator.avatars.idle} alt={narrator.name[language]} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h1 className="font-display text-3xl font-bold text-foreground">
                        Welcome!
                    </h1>
                    <div className="flex items-center space-x-2 mt-2">
                        <p className="text-lg text-muted-foreground">
                          Your <span className="font-bold text-primary">{narrator.name[language]}</span> is here to guide you.
                        </p>
                        <Tooltip tip="Read introduction aloud">
                          <button onClick={() => handleSpeak(narrator.intro[language])} className="text-primary/80 hover:text-primary transition-colors p-1 rounded-full hover:bg-primary/10" aria-label="Read introduction aloud">
                              <SpeakerIcon className="w-6 h-6" />
                          </button>
                        </Tooltip>
                    </div>
                </div>
            </header>
        )}
        <div className={mode === 'practice' ? "bg-card/50 p-6 rounded-2xl shadow-inner min-h-[400px]" : ""}>
            {renderContent()}
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;