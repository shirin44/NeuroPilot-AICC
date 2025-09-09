import React, { useContext, useEffect } from 'react';
import StarMethodIcon from '../../icons/StarMethodIcon';
import { AppContext } from '../../../App';
import { DIALOGUE } from '../../../constants';

// Mock data for demonstration
const mockHistory = [
  { id: 1, date: 'Yesterday', type: 'STAR Interview', overallScore: 4 },
  { id: 2, date: '3 days ago', type: 'Common Questions', overallScore: 3 },
  { id: 3, date: 'Last week', type: 'STAR Interview', overallScore: 3 },
];

const mockBadges = [
  { id: 1, name: 'First Step', description: 'Completed your first practice session!', icon: 'action' },
  { id: 2, name: 'Consistent Learner', description: 'Practiced 3 times this week!', icon: 'result' },
  { id: 3, name: 'STAR Expert', description: 'Achieved a 4-star overall score!', icon: 'situation' },
];

const StarRating: React.FC<{ score: number }> = ({ score }) => (
    <div className="flex">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < score ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.363 2.44a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.363-2.44a1 1 0 00-1.175 0l-3.363 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
        ))}
    </div>
);


const SessionHistory: React.FC = () => {
  const { language, setNarratorDialogue, setNarratorState } = useContext(AppContext);
  
  useEffect(() => {
    setNarratorDialogue(DIALOGUE.jobseekerHistory[language]);
    setNarratorState('celebrating');
    const timer = setTimeout(() => setNarratorState('idle'), 4000);
    return () => clearTimeout(timer);
  }, [language, setNarratorDialogue, setNarratorState]);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl font-bold mb-4">Your Progress</h2>
        <p className="text-muted-foreground">You've practiced {mockHistory.length} times. Consistency builds confidence!</p>
      </div>

      <div className="p-6 bg-accent/10 rounded-2xl border border-accent/20">
        <h3 className="font-display text-xl font-bold text-accent mb-4">Your Badges</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {mockBadges.map(badge => (
            <div key={badge.id} className="text-center p-4 bg-card rounded-lg shadow-sm">
                <StarMethodIcon type={badge.icon as any} className="w-10 h-10 mx-auto text-accent bg-accent/10 rounded-full p-2"/>
                <p className="mt-2 font-semibold text-sm text-accent/90">{badge.name}</p>
                <p className="text-xs text-accent/80">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-xl font-bold mb-4">Past Sessions</h3>
        <div className="space-y-3">
          {mockHistory.map(session => (
            <div key={session.id} className="flex items-center justify-between p-4 bg-card rounded-lg border border-border shadow-sm">
              <div>
                <p className="font-semibold">{session.type}</p>
                <p className="text-sm text-muted-foreground">{session.date}</p>
              </div>
              <div className="text-right">
                <StarRating score={session.overallScore} />
                <p className="text-xs text-muted-foreground">Overall Score</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SessionHistory;