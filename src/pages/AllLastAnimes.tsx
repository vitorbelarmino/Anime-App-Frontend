import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LatestEpisodes } from '../components/LatestEpisodes';

export function AllLastAnimes(): JSX.Element {
  return (
    <div className="home-page">
      <Header />
      <LatestEpisodes quantity={20} />
      <Footer />
    </div>
  );
}
