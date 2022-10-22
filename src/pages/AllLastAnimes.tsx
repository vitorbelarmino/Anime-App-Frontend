import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LastAnimes } from '../components/LastAnimes';

export function AllLastAnimes(): JSX.Element {
  return (
    <div className="last-animes-page">
      <Header />
      <LastAnimes quantity={-1} description="Últimos laçamentos" />
      <Footer />
    </div>
  );
}
