
import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../../App';
import { DIALOGUE, LOCALIZED_CONTENT, PARENT_CONTENT } from '../../../constants';
import ModuleCard from './ModuleCard';
import Accordion from './Accordion';
import RoutineBuilder from './RoutineBuilder';
import BreathingCoach from './BreathingCoach';
import StarInfographic from './StarInfographic';

type ParentScreen = 'intro' | 'overview' | 'module1' | 'module2' | 'module3' | 'module4' | 'faq' | 'resources';

const ParentGuidance: React.FC = () => {
    const { language, setNarratorDialogue, setNarratorState } = useContext(AppContext);
    const [screen, setScreen] = useState<ParentScreen>('intro');
    const [completedModules, setCompletedModules] = useState<string[]>([]);

    useEffect(() => {
        let dialogueKey = '';
        switch(screen) {
            case 'intro': dialogueKey = 'parentIntro'; break;
            case 'overview': dialogueKey = 'parentOverview'; break;
            case 'module1': dialogueKey = 'parentModule1'; break;
            case 'module2': dialogueKey = 'parentModule2'; break;
            case 'module3': dialogueKey = 'parentModule3'; break;
            case 'module4': dialogueKey = 'parentModule4'; break;
            case 'faq': dialogueKey = 'parentFAQ'; break;
            case 'resources': dialogueKey = 'parentResources'; break;
        }
        if (dialogueKey) {
            setNarratorDialogue(DIALOGUE[dialogueKey][language]);
        }
        setNarratorState('talking');
    }, [screen, language, setNarratorDialogue, setNarratorState]);

    const handleModuleComplete = (moduleId: string) => {
        if (!completedModules.includes(moduleId)) {
            setCompletedModules([...completedModules, moduleId]);
        }
        // Navigate to the next module or back to overview
        const currentIndex = PARENT_CONTENT.modules.findIndex(m => m.id === moduleId);
        if (currentIndex < PARENT_CONTENT.modules.length - 1) {
            const nextModule = PARENT_CONTENT.modules[currentIndex + 1].id as ParentScreen;
            setScreen(nextModule);
        } else {
            setScreen('overview');
        }
    };

    const renderScreen = () => {
        switch (screen) {
            case 'intro':
                return (
                    <div className="text-center">
                        <h2 className="font-display text-3xl font-bold mb-4">A Warm Welcome</h2>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                            I'm here to share simple, evidence-informed steps to support your child’s journey. You're not alone.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button onClick={() => setScreen('overview')} className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full text-lg hover:bg-primary/90 transition-colors shadow-md">
                                {LOCALIZED_CONTENT.start[language]}
                            </button>
                        </div>
                    </div>
                );
            case 'overview':
                return (
                    <div>
                        <h2 className="font-display text-3xl font-bold mb-6">{LOCALIZED_CONTENT.whatYouWillLearn[language]}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {PARENT_CONTENT.modules.map(module => (
                                <ModuleCard 
                                    key={module.id}
                                    title={module.title[language]}
                                    time={module.time[language]}
                                    isCompleted={completedModules.includes(module.id)}
                                    onClick={() => setScreen(module.id as ParentScreen)}
                                />
                            ))}
                        </div>
                         <div className="flex justify-center space-x-4">
                            <button onClick={() => setScreen('faq')} className="px-8 py-3 bg-card border border-primary text-primary font-semibold rounded-full hover:bg-primary/10">{LOCALIZED_CONTENT.faq[language]}</button>
                            <button onClick={() => setScreen('resources')} className="px-8 py-3 bg-card border border-primary text-primary font-semibold rounded-full hover:bg-primary/10">{LOCALIZED_CONTENT.resources[language]}</button>
                        </div>
                    </div>
                );
            case 'module1':
                return (
                    <div>
                        <h2 className="font-display text-2xl font-bold mb-4">{LOCALIZED_CONTENT.module1Title[language]}</h2>
                        <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6">
                            <li>Autistic individuals may need more time to process questions.</li>
                            <li>They often interpret language literally; avoid sarcasm or vague phrases.</li>
                            <li>Small talk can be stressful; it's okay to get straight to the point.</li>
                        </ul>
                         <div className="p-4 bg-primary/10 border-l-4 border-primary">
                            <h3 className="font-bold text-primary/90">Try This Now:</h3>
                            <p className="text-primary/80">Ask one clear question at a time. After you ask, count to 10 in your head to create a comfortable pause.</p>
                        </div>
                        <button onClick={() => handleModuleComplete('module1')} className="mt-6 px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90">
                            {LOCALIZED_CONTENT.completeAndNext[language]} &rarr;
                        </button>
                    </div>
                );
            case 'module2':
                 return (
                    <div>
                        <h2 className="font-display text-2xl font-bold mb-4">{LOCALIZED_CONTENT.module2Title[language]}</h2>
                        <StarInfographic />
                        <div className="p-4 bg-secondary border border-border rounded-lg text-foreground space-y-3">
                            <p className="font-semibold">Practice Script:</p>
                            <p><strong>You (Parent):</strong> "Tell me about a time you solved a problem."</p>
                            <p><strong>Your Child:</strong> (S) "At my internship, the team's shared drive was disorganized."</p>
                            <p><strong>You (Parent):</strong> "Good start! What were you asked to do? (Task)"</p>
                             <p><strong>Your Child:</strong> "My manager asked me to create a new folder system."</p>
                            <p><strong>You (Parent):</strong> "Great! Now add what you actually did. (Action)"</p>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground"><strong>Tip:</strong> Replace broad questions with step-by-step prompts.</p>
                         <button onClick={() => handleModuleComplete('module2')} className="mt-6 px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90">
                           {LOCALIZED_CONTENT.completeAndNext[language]} &rarr;
                        </button>
                    </div>
                );
            case 'module3':
                 return (
                    <div>
                        <h2 className="font-display text-2xl font-bold mb-4">{LOCALIZED_CONTENT.module3Title[language]}</h2>
                        <p className="mb-4">Create a calm pre-interview routine to reduce anxiety.</p>
                        <RoutineBuilder />
                        <div className="mt-8">
                            <h3 className="font-semibold text-lg mb-2">Practice a Calming Breath</h3>
                            <BreathingCoach />
                        </div>
                         <button onClick={() => handleModuleComplete('module3')} className="mt-6 px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90">
                           {LOCALIZED_CONTENT.completeAndNext[language]} &rarr;
                        </button>
                    </div>
                );
            case 'module4':
                 return (
                    <div>
                        <h2 className="font-display text-2xl font-bold mb-4">{LOCALIZED_CONTENT.module4Title[language]}</h2>
                        <p className="mb-4">Model supportive phrasing and encourage autonomy.</p>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 rounded-lg">
                                <h3 className="font-bold text-green-800">Do 👍</h3>
                                <p className="text-green-700">"I noticed you explained your actions clearly." (Specific praise)</p>
                                <p className="mt-2 text-green-700">"What part do you want to practice next?" (Gives autonomy)</p>
                            </div>
                            <div className="p-4 bg-red-50 rounded-lg">
                                 <h3 className="font-bold text-red-800">Don't 👎</h3>
                                <p className="text-red-700">"Good job." (Too general)</p>
                                <p className="mt-2 text-red-700">"You need to fix your posture, speak louder, and smile." (Overwhelming)</p>
                            </div>
                        </div>
                         <button onClick={() => handleModuleComplete('module4')} className="mt-6 px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90">
                           {LOCALIZED_CONTENT.finishAndReturn[language]}
                        </button>
                    </div>
                );
            case 'faq':
                return (
                    <div>
                        <h2 className="font-display text-3xl font-bold mb-6">{LOCALIZED_CONTENT.faq[language]}</h2>
                        <div className="space-y-4">
                            {PARENT_CONTENT.faqs.map((faq, index) => (
                                <Accordion key={index} title={faq.q[language]}>
                                    <p>{faq.a[language]}</p>
                                </Accordion>
                            ))}
                        </div>
                    </div>
                );
            case 'resources':
                return (
                    <div>
                        <h2 className="font-display text-3xl font-bold mb-6">{LOCALIZED_CONTENT.resources[language]}</h2>
                        <div className="space-y-4">
                            {PARENT_CONTENT.resources.map(resource => (
                                <div key={resource.name} className="p-4 bg-card border border-border rounded-lg">
                                    <h3 className="font-semibold text-lg text-primary">{resource.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{resource.desc[language]}</p>
                                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-accent hover:underline mt-2 inline-block">Visit &rarr;</a>
                                </div>
                            ))}
                        </div>
                    </div>
                )
        }
    };
    
    return (
        <div>
            {screen !== 'intro' && screen !== 'overview' && (
                <button onClick={() => setScreen('overview')} className="mb-6 text-sm font-semibold text-primary hover:underline">&larr; {LOCALIZED_CONTENT.backToOverview[language]}</button>
            )}
            {renderScreen()}
        </div>
    )
};

export default ParentGuidance;