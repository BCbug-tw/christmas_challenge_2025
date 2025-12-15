function Result({ imageUrl, onNext, onViewHistory }) {
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

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button onClick={onNext} className="btn">
                    再玩一次
                </button>
                <button
                    onClick={onViewHistory}
                    className="btn"
                    style={{ background: '#4CAF50' }}
                >
                    挑戰紀錄
                </button>
            </div>
        </div>
    );
}

export default Result;
