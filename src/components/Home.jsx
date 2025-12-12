function Home({ user, onStart }) {
    return (
        <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                {user.avatar}
            </div>
            <h1>Hello, {user.nickname}!</h1>
            <h2 style={{ color: '#D42426' }}>聖誕大作戰<br />之<br />情侶照大挑戰</h2>
            <p style={{ margin: '2rem 0', lineHeight: '1.6' }}>
                準備好接受考驗了嗎？<br />
                隨機抽取一個拍照姿勢，<br />
                完成它並留下美好的回憶吧！
            </p>
            <button onClick={onStart} className="btn">
                接受挑戰
            </button>
        </div>
    );
}

export default Home;
