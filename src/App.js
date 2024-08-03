import './App.css';
import Header from './components/Header/Header';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';

const tg = window.Telegram.WebApp;

function App() {
  const {tg, onToggleButton} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
