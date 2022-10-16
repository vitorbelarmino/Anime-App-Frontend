import Header from './components/Header';
import Highlights from './components/Highlights';
import { LatestEpisodes } from './components/LastReleases';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Highlights />
      <LatestEpisodes />
    </div>
  );
}

export default App;
