import { EpisodeDetails } from '../components/EpisodeDetails';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function EpisodeDetailsPage(): JSX.Element {
  return (
    <div className="container-episode">
      <Header />
      <EpisodeDetails />
      <Footer />
    </div>
  );
}
