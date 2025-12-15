import { useState } from 'react'
import Onboarding from './components/Onboarding'
import Home from './components/Home'
import ChallengeSelector from './components/ChallengeSelector'
import Result from './components/Result'


function App() {
  const [step, setStep] = useState('ONBOARDING'); // ONBOARDING | HOME | SELECTING | RESULT
  const [user, setUser] = useState({ nickname: '', avatar: '🎅' });
  const [currentChallengeUrl, setCurrentChallengeUrl] = useState(null);

  const [history, setHistory] = useState([]);

  const handleUserComplete = (userData) => {
    setUser(userData);
    setStep('HOME');
  };

  const startChallenge = () => {
    setStep('SELECTING');
  };

  const handleChallengeSelected = (imageUrl) => {
    setCurrentChallengeUrl(imageUrl);
    setHistory(prev => [...prev, imageUrl]);
    setTimeout(() => {
      setStep('RESULT');
    }, 500); // Small delay for effect
  };

  const nextChallenge = () => {
    setStep('SELECTING');
  };

  return (
    <div className="container">
      {step === 'ONBOARDING' && <Onboarding onComplete={handleUserComplete} />}
      {step === 'HOME' && <Home user={user} onStart={startChallenge} />}
      {step === 'SELECTING' && <ChallengeSelector onComplete={handleChallengeSelected} history={history} />}
      {step === 'RESULT' && <Result imageUrl={currentChallengeUrl} onNext={nextChallenge} history={history} />}
    </div>
  )
}

export default App
