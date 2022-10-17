import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Highlights } from './components/Highlights';
import { LastAnimes } from './components/LastAnimes';
import { LatestEpisodes } from './components/LatestEpisodes';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Highlights />
      <LatestEpisodes />
      <LastAnimes />
      <Footer />
    </div>
  );
}

export default App;
