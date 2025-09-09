import React, { useEffect } from 'react';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import MicrophoneIcon from './icons/MicrophoneIcon';

interface VoiceInputButtonProps {
    onTextReceived: (text: string) => void;
}

const VoiceInputButton: React.FC<VoiceInputButtonProps> = ({ onTextReceived }) => {
    const {
        isListening,
        transcript,
        startListening,
        stopListening,
        hasSupport,
        error,
    } = useSpeechRecognition();

    useEffect(() => {
        if (transcript) {
            onTextReceived(transcript);
        }
    }, [transcript, onTextReceived]);

    const handleToggleListening = () => {
        if (isListening) {
            stopListening();
        } else {
            startListening();
        }
    };
    
    if (!hasSupport) {
        return null; // Don't render if the browser doesn't support the API
    }

    return (
        <div className="flex items-center space-x-2">
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
                type="button"
                onClick={handleToggleListening}
                className={`p-2 rounded-full transition-colors ${
                    isListening
                        ? 'bg-red-500 text-white animate-pulse'
                        : 'bg-brand-neutral-100 text-brand-neutral-700 hover:bg-brand-neutral-300'
                }`}
                title={isListening ? "Stop recording" : "Start recording"}
            >
                <MicrophoneIcon className="w-5 h-5" />
            </button>
        </div>
    );
};

export default VoiceInputButton;
