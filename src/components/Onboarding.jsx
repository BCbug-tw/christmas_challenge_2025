import { useState } from 'react';

const AVATARS = ['🎅', '🤶', '🦌', '⛄', '🎄', '🎁'];

function Onboarding({ onComplete }) {
    const [nickname, setNickname] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nickname.trim()) {
            onComplete({ nickname, avatar: selectedAvatar });
        }
    };

    return (
        <div className="card">
            <h2>🎄 建立聖誕檔案 🎄</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ margin: '20px 0' }}>
                    <label style={{ display: 'block', marginBottom: '10px' }}>選擇你的頭貼</label>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {AVATARS.map(avatar => (
                            <button
                                key={avatar}
                                type="button"
                                onClick={() => setSelectedAvatar(avatar)}
                                style={{
                                    fontSize: '2rem',
                                    background: selectedAvatar === avatar ? '#FFD700' : 'transparent',
                                    border: '2px solid #ddd',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    width: '60px',
                                    height: '60px',
                                    transition: 'background 0.3s'
                                }}
                            >
                                {avatar}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ margin: '20px 0' }}>
                    <label style={{ display: 'block', marginBottom: '10px' }}>輸入暱稱</label>
                    <input
                        type="text"
                        placeholder="例如：聖誕小精靈"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn">
                    下一步
                </button>
            </form>
        </div>
    );
}

export default Onboarding;
