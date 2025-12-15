import { useState } from 'react';

function History({ user, history, onBack }) {
    // Default to the last image (latest) if available
    const [selectedImage, setSelectedImage] = useState(history.length > 0 ? history[history.length - 1] : null);

    if (!history || history.length === 0) {
        return (
            <div className="card">
                <h2>尚無挑戰紀錄</h2>
                <button onClick={onBack} className="btn" style={{ marginTop: '20px' }}>返回</button>
            </div>
        );
    }

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
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                justifyContent: 'flex-start',
                marginBottom: '2rem'
            }}>
                {history.map((img, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedImage(img)}
                        style={{
                            width: '80px',
                            height: '80px',
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
                            alt={`History ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                ))}
            </div>

            <button onClick={onBack} className="btn" style={{ background: '#666' }}>
                返回
            </button>
        </div>
    );
}

export default History;
