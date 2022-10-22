import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LatestEpisodes } from '../components/LatestEpisodes';

export function AllLastEpisodes(): JSX.Element {
  return (
    <div className="last-Episodes-page">
      <Header />
      <LatestEpisodes quantity={12} description="Últimos episódios" />
      <Footer />
    </div>
  );
}
