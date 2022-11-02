import { CategoriesDivider } from '../components/CategoriesDivider';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Highlights } from '../components/Highlights';
import { LastAnimes } from '../components/LastAnimes';
import { LatestEpisodes } from '../components/LatestEpisodes';

export function Home(): JSX.Element {
  return (
    <div className="home-page">
      <Header />
      <Highlights />
      <CategoriesDivider name="Últimos episódios" path="/lastEpisodes" />
      <LatestEpisodes quantity={12} />
      <CategoriesDivider name="Últimos animes" path="/lastAnimes" />
      <LastAnimes quantity={18} />
      <Footer />
    </div>
  );
}
