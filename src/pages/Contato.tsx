import { Contato } from '../components/Contato/Contato';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function ContatoPage(): JSX.Element {
  return (
    <div className="contato-page">
      <Header />
      <Contato />
      <Footer />
    </div>
  );
}
