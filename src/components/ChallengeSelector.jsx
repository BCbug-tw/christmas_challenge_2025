import { useState, useEffect } from 'react';
import { challengeImages } from '../data/challenges';

function ChallengeSelector({ onComplete }) {
    const [displayIndex, setDisplayIndex] = useState(0);
    const [isSpinning, setIsSpinning] = useState(true);

    useEffect(() => {
        let interval;
        let timeout;

        // Spinning effect
        interval = setInterval(() => {
            setDisplayIndex(prev => (prev + 1) % challengeImages.length);
        }, 100);

        // Stop spinning after 3 seconds
        timeout = setTimeout(() => {
            clearInterval(interval);
            setIsSpinning(false);

            // Select a random final challenge
            const finalIndex = Math.floor(Math.random() * challengeImages.length);
            setDisplayIndex(finalIndex);

            // Wait a moment showing the result then proceed
            setTimeout(() => {
                onComplete(challengeImages[finalIndex]);
            }, 1000);

        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [onComplete]);

    const currentImage = challengeImages[displayIndex];

    return (
        <div className="card">
            <h2>正在抽取挑戰...</h2>
            <div style={{
                margin: '2rem auto',
                height: '300px',
                width: '300px',
                overflow: 'hidden',
                borderRadius: '12px',
                border: '4px solid #ff4d4d',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#eee',
                animation: isSpinning ? 'pulse 0.5s infinite' : 'none'
            }}>
                {/* Image preview during spin */}
                <img
                    src={currentImage}
                    alt="Challenge Preview"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>
        </div>
    );
}

export default ChallengeSelector;
