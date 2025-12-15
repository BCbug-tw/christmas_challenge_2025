function Result({ imageUrl, onNext, history = [] }) {
    if (!imageUrl) return null;

    return (
        <div className="card">
            <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                您的挑戰是...！
            </h1>

            <div style={{
                background: '#eee',
                maxWidth: '100%',
                maxHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '1rem auto',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
                <img
                    src={imageUrl}
                    alt="Challenge Result"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        maxHeight: '50vh'
                    }}
                />
            </div>

            <p style={{ color: '#666', marginBottom: '2rem' }}>
                模仿照片中的動作並拍照留念吧！
            </p>

            <button onClick={onNext} className="btn">
                再玩一次
            </button>

            {history.length > 0 && (
                <div style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                    <h3 style={{ fontSize: '1rem', color: '#888', marginBottom: '0.5rem' }}>
                        已完成的挑戰 ({history.length})
                    </h3>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        justifyContent: 'center',
                        marginTop: '0.5rem'
                    }}>
                        {history.map((img, index) => (
                            <div
                                key={index}
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '6px',
                                    overflow: 'hidden',
                                    border: img === imageUrl ? '2px solid #ff4d4d' : '1px solid #ddd',
                                    opacity: img === imageUrl ? 1 : 0.6,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                                title={`挑戰 #${index + 1}`}
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
                </div>
            )}
        </div>
    );
}

export default Result;
