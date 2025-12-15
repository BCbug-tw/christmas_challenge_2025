import { useEffect } from 'react';
import confetti from 'canvas-confetti';

function EndScreen({ user, history }) {

    useEffect(() => {
        // Falling snow/confetti effect
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        let skew = 1;

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        (function frame() {
            const timeLeft = animationEnd - Date.now();
            const ticks = Math.max(200, 500 * (timeLeft / duration));
            skew = Math.max(0.8, skew - 0.001);

            confetti({
                particleCount: 1,
                startVelocity: 0,
                ticks: ticks,
                origin: {
                    x: Math.random(),
                    // since particles fall down, skew start toward the top
                    y: (Math.random() * skew) - 0.2
                },
                colors: ['#ff4d4d', '#ffffff', '#2ecc71', '#d4af37'],
                shapes: ['circle', 'square'],
                gravity: randomInRange(0.4, 0.8),
                scalar: randomInRange(0.4, 1),
                drift: randomInRange(-0.4, 0.4)
            });

            if (timeLeft > 0) {
                requestAnimationFrame(frame);
            }
        }());
    }, []);

    return (
        <div className="card" style={{ maxWidth: '600px', padding: '3rem 2rem', position: 'relative', overflow: 'hidden' }}>
            <div className="celebration-icon" style={{ fontSize: '5rem', marginBottom: '1rem', animation: 'bounce 2s infinite' }}>🎀</div>
            <h1 style={{
                fontSize: '2rem',
                marginBottom: '2rem',
                background: 'linear-gradient(45deg, #d4af37, #ff4d4d)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                fontWeight: '800',
                animation: 'scaleIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
                {user.nickname}，恭喜您！
            </h1>

            <div style={{ animation: 'fadeInUp 1s ease-out 0.5s backwards' }}>
                <p style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: '#d4af37',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                    lineHeight: '1.8',
                    marginBottom: '2rem'
                }}>
                    恭喜您完成<br />
                    聖誕大作戰之情侶照大挑戰！<br />

                    您一共完成了
                    <span style={{
                        color: '#ff4d4d',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        margin: '0 8px',
                        textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
                        display: 'inline-block',
                        animation: 'pulse 1.5s infinite'
                    }}>
                        {history.length}
                    </span>
                    張照片。<br />

                    聖誕大作戰挑戰大成功！<br />
                    希望您留下美好的回憶。<br />
                    聖誕快樂！ 🎄🎅🎁
                </p>
            </div>

            <div style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#888' }}>
                Reflesh page to restart
            </div>

            <style>
                {`
                @keyframes scaleIn {
                    from { transform: scale(0.5); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                @keyframes fadeInUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
                    40% {transform: translateY(-20px);}
                    60% {transform: translateY(-10px);}
                }
                `}
            </style>
        </div>
    );
}

export default EndScreen;
