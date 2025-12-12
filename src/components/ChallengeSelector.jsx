import { useState, useEffect } from 'react';
import { challenges } from '../data/challenges';

function ChallengeSelector({ onComplete }) {
    const [displayIndex, setDisplayIndex] = useState(0);
    const [isSpinning, setIsSpinning] = useState(true);

    useEffect(() => {
        let interval;
        let timeout;

        // Spinning effect
        interval = setInterval(() => {
            setDisplayIndex(prev => (prev + 1) % challenges.length);
        }, 100);

        // Stop spinning after 3 seconds
        timeout = setTimeout(() => {
            clearInterval(interval);
            setIsSpinning(false);

            // Select a random final challenge
            const finalIndex = Math.floor(Math.random() * challenges.length);
            setDisplayIndex(finalIndex);

            // Wait a moment showing the result then proceed
            setTimeout(() => {
                onComplete(challenges[finalIndex].id);
            }, 1000);

        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [onComplete]);

    const currentItem = challenges[displayIndex];

    return (
        <div className="card">
            <h2>正在抽取挑戰...</h2>
            <div style={{
                margin: '2rem auto',
                fontSize: '5rem',
                animation: isSpinning ? 'pulse 0.5s infinite' : 'none'
            }}>
                🎁
            </div>
            <h3 style={{ opacity: 0.8 }}>
                {currentItem ? currentItem.title : '...'}
            </h3>
        </div>
    );
}

export default ChallengeSelector;
