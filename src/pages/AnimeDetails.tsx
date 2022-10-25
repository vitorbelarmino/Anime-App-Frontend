import { AnimeDetails } from '../components/animeDetails';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function AnimeDetailsPage(): JSX.Element {
  return (
    <div className="anime-details-page">
      <Header />
      <AnimeDetails />
      <Footer />
    </div>
  );
}
