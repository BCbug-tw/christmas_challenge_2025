import { useEffect } from 'react';
import confetti from 'canvas-confetti';

function EndScreen({ user, history }) {

    useEffect(() => {
        // Fire confetti when component mounts
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // source 1
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            // source 2
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="card" style={{ maxWidth: '600px', padding: '3rem 2rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
            <h1 style={{ color: '#d4af37', fontSize: '2rem', marginBottom: '2rem' }}>
                {user.nickname}，恭喜您！
            </h1>

            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#444', marginBottom: '2rem' }}>
                {user.nickname} 恭喜您完成聖誕大挑戰之情侶照大挑戰！<br />
                您一共完成了 <strong style={{ color: '#ff4d4d', fontSize: '1.5rem' }}>{history.length}</strong> 張照片。<br />
                聖誕大挑戰大成功！<br />
                希望您留下美好的回憶。<br />
                聖誕快樂！ 🎄🎅🎁
            </p>

            <div style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#888' }}>
                Refresh page to restart
            </div>
        </div>
    );
}

export default EndScreen;
