
import { useState, useEffect } from 'react';

function History({ user, history, onBack }) {
    const [selectedImage, setSelectedImage] = useState(null);

    // Update selected image when history changes or component mounts
    useEffect(() => {
        if (history && history.length > 0) {
            // Default to the last image (latest)
            setSelectedImage(history[history.length - 1]);
        }
    }, [history]);

    if (!history || history.length === 0) {
        return (
            <div className="card">
                <h2>尚無挑戰紀錄</h2>
                <button onClick={onBack} className="btn" style={{ marginTop: '20px' }}>返回</button>
            </div>
        );
    }

    // Create a reversed copy for display so latest is first
    const displayHistory = [...history].reverse();

    return (
        <div className="card" style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                {user.nickname} 的挑戰歷程
            </h1>

            {/* Main Display Area */}
            <div style={{
                background: '#eee',
                width: '100%',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
                {selectedImage && (
                    <img
                        src={selectedImage}
                        alt="Selected Challenge"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                        }}
                    />
                )}
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '2rem 0' }} />

            {/* Thumbnails Area */}
            <h3 style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1rem', textAlign: 'left' }}>
                已挑戰 ({history.length})
            </h3>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '2rem'
            }}>
                {displayHistory.map((img, index) => {
                    // Original index calculation (since we reversed the array)
                    // The latest item is at index 0 in displayHistory, which corresponds to history.length - 1
                    const originalIndex = history.length - 1 - index;

                    return (
                        <div
                            key={originalIndex}
                            onClick={() => setSelectedImage(img)}
                            style={{
                                width: '100%',
                                aspectRatio: '1',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                border: img === selectedImage ? '3px solid #ff4d4d' : '1px solid #ddd',
                                cursor: 'pointer',
                                opacity: img === selectedImage ? 1 : 0.7,
                                transition: 'all 0.2s',
                                transform: img === selectedImage ? 'scale(1.05)' : 'scale(1)'
                            }}
                        >
                            <img
                                src={img}
                                alt={`History ${originalIndex + 1} `}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    );
                })}
            </div>

            <button onClick={onBack} className="btn" style={{ background: '#666' }}>
                返回
            </button>
        </div>
    );
}

export default History;
