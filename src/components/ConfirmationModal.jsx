function ConfirmationModal({ isOpen, onConfirm, onCancel }) {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(3px)'
        }}>
            <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                width: '90%',
                maxWidth: '400px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                textAlign: 'center',
                animation: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#333' }}>
                    結束挑戰？
                </h3>
                <p style={{ color: '#666', marginBottom: '2rem', lineHeight: '1.5' }}>
                    確定要結束目前的挑戰嗎？<br />
                    這將會帶您前往結算畫面。
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button
                        onClick={onCancel}
                        style={{
                            padding: '0.8rem 1.5rem',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            background: 'white',
                            color: '#666',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            flex: 1
                        }}
                    >
                        再想想
                    </button>
                    <button
                        onClick={onConfirm}
                        style={{
                            padding: '0.8rem 1.5rem',
                            borderRadius: '8px',
                            border: 'none',
                            background: '#ff4d4d',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            flex: 1,
                            boxShadow: '0 4px 12px rgba(255, 77, 77, 0.3)'
                        }}
                    >
                        確定結束
                    </button>
                </div>
            </div>
            <style>
                {`
                @keyframes popIn {
                    from { opacity: 0; transform: scale(0.8); }
                    to { opacity: 1; transform: scale(1); }
                }
                `}
            </style>
        </div>
    );
}

export default ConfirmationModal;
