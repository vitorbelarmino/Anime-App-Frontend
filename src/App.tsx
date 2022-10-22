import { Routes, Route } from 'react-router-dom';
import { AllLastAnimes } from './pages/AllLastAnimes';
import { AllLastEpisodes } from './pages/AllLastEpisodes';
import { ContatoPage } from './pages/Contato';
import { Home } from './pages/home';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lastEpisodes" element={<AllLastEpisodes />} />
        <Route path="/lastAnimes" element={<AllLastAnimes />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
    </div>
  );
}

export default App;
