import React, { useContext, useEffect } from 'react';
import StarMethodIcon from '../../icons/StarMethodIcon';
import { AppContext } from '../../../App';
import { DIALOGUE } from '../../../constants';

type HistoryItem = {
  id: number | string;
  date: string;               // e.g., "Yesterday"
  type: string;               // e.g., "STAR Interview"
  overallScore: number;       // 0..5
};

type Badge = {
  id: number | string;
  name: string;
  description: string;
  icon: 'situation' | 'task' | 'action' | 'result';
};

type SessionHistoryProps = {
  history?: HistoryItem[];
  badges?: Badge[];
};

/* ---------- Defaults (used only if props not supplied) ---------- */
const fallbackHistory: HistoryItem[] = [
  { id: 1, date: 'Yesterday',   type: 'STAR Interview',   overallScore: 4 },
  { id: 2, date: '3 days ago',  type: 'Common Questions', overallScore: 3 },
  { id: 3, date: 'Last week',   type: 'STAR Interview',   overallScore: 3 },
];

const fallbackBadges: Badge[] = [
  { id: 1, name: 'First Step',          description: 'Completed your first practice session!', icon: 'action' },
  { id: 2, name: 'Consistent Learner',  description: 'Practiced 3 times this week!',          icon: 'result' },
  { id: 3, name: 'STAR Expert',         description: 'Achieved a 4-star overall score!',      icon: 'situation' },
];

/* ---------- Accessible star rating ---------- */
const StarRating: React.FC<{ score: number; size?: string }> = ({ score, size = 'w-5 h-5' }) => (
  <div role="img" aria-label={`${score} out of 5 stars`} className="flex">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`${size} ${i < score ? 'text-yellow-500' : 'text-slate-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.363 2.44a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.363-2.44a1 1 0 00-1.175 0l-3.363 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69L9.049 2.927z" />
      </svg>
    ))}
  </div>
);

/* ---------- Component ---------- */
const SessionHistory: React.FC<SessionHistoryProps> = ({ history = fallbackHistory, badges = fallbackBadges }) => {
  const { language, setNarratorDialogue, setNarratorState } = useContext(AppContext);

  useEffect(() => {
    setNarratorDialogue(DIALOGUE.jobseekerHistory[language]);
    setNarratorState('celebrating');
    const t = setTimeout(() => setNarratorState('idle'), 4000);
    return () => clearTimeout(t);
  }, [language, setNarratorDialogue, setNarratorState]);

  const totalSessions = history.length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <section aria-labelledby="progress-heading">
        <h2
          id="progress-heading"
          className="font-display text-3xl font-extrabold mb-2 text-slate-900"
        >
          Your Progress
        </h2>
        <p className="text-slate-800">
          You’ve practiced <span className="font-semibold">{totalSessions}</span> {totalSessions === 1 ? 'time' : 'times'}. Consistency builds confidence!
        </p>
      </section>

      {/* Badges */}
      <section
        aria-labelledby="badges-heading"
        className="p-6 bg-white rounded-2xl border border-slate-300 shadow-sm"
      >
        <h3 id="badges-heading" className="font-display text-2xl font-bold text-slate-900 mb-4">
          Your Badges
        </h3>

        {badges.length === 0 ? (
          <p className="text-slate-800">No badges yet — complete a practice session to earn your first badge.</p>
        ) : (
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {badges.map((b) => (
              <li
                key={b.id}
                className="text-center p-4 bg-white rounded-lg shadow-sm border border-slate-300"
              >
                <StarMethodIcon
                  type={b.icon}
                  className="w-10 h-10 mx-auto text-slate-900 bg-slate-100 rounded-full p-2"
                  aria-hidden="true"
                />
                <p className="mt-2 font-semibold text-slate-900">{b.name}</p>
                <p className="text-sm text-slate-800">{b.description}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Past Sessions */}
      <section aria-labelledby="sessions-heading">
        <h3 id="sessions-heading" className="font-display text-2xl font-bold mb-4 text-slate-900">
          Past Sessions
        </h3>

        {history.length === 0 ? (
          <p className="text-slate-800">No sessions yet. Start a practice to see your history here.</p>
        ) : (
          <ul className="space-y-3">
            {history.map((s) => (
              <li
                key={s.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-300 shadow-sm"
              >
                <div>
                  <p className="font-semibold text-slate-900">{s.type}</p>
                  <p className="text-sm text-slate-800">{s.date}</p>
                </div>
                <div className="text-right">
                  <StarRating score={s.overallScore} />
                  <p className="text-xs text-slate-800 mt-1">Overall Score</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default SessionHistory;
