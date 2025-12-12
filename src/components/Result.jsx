function Result({ challenge, onNext }) {
    if (!challenge) return null;

    return (
        <div className="card">
            <div style={{ fontSize: '1.2rem', color: '#888', marginBottom: '0.5rem' }}>
                挑戰 #{challenge.id}
            </div>
            <h1 style={{ fontSize: '2.5rem', marginTop: 0 }}>{challenge.title}</h1>

            <div style={{
                background: '#eee',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '1rem 0',
                borderRadius: '8px',
                overflow: 'hidden'
            }}>
                {/* Placeholder for real image */}
                <div style={{ fontSize: '3rem' }}>📸</div>
            </div>

            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                {challenge.description}
            </p>
            <p style={{ color: '#666' }}>
                比姿提示：{challenge.instruction}
            </p>

            <button onClick={onNext} className="btn">
                下一個挑戰
            </button>
        </div>
    );
}

export default Result;
