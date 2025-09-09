import React, { useState } from 'react';

const routineOptions = [
    'Review 1 practice question',
    'Listen to calming music',
    'Do 5 minutes of stretching',
    'Drink a glass of water',
    'Wear comfortable clothes',
    'Use a fidget tool',
];

const RoutineBuilder: React.FC = () => {
    const [selected, setSelected] = useState<string[]>([]);

    const toggleSelection = (option: string) => {
        if (selected.includes(option)) {
            setSelected(selected.filter(item => item !== option));
        } else if (selected.length < 3) {
            setSelected([...selected, option]);
        }
    };

    return (
        <div className="p-4 bg-card border border-border rounded-lg">
            <h4 className="font-semibold text-foreground">Build a 3-Step Pre-Interview Routine:</h4>
            <div className="flex flex-wrap gap-2 my-3">
                {routineOptions.map(option => (
                    <button
                        key={option}
                        onClick={() => toggleSelection(option)}
                        aria-pressed={selected.includes(option)}
                        className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                            selected.includes(option)
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'bg-card text-muted-foreground border-border hover:bg-muted'
                        }`}
                        disabled={!selected.includes(option) && selected.length >= 3}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {selected.length > 0 && (
                <div className="mt-4 p-3 bg-primary/10 rounded-md text-primary/90">
                    <h5 className="font-bold">Your Routine:</h5>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                        {selected.map(item => <li key={item}>{item}</li>)}
                    </ol>
                </div>
            )}
        </div>
    );
};

export default RoutineBuilder;