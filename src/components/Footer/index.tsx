import { useNavigate } from 'react-router-dom';
import './style.scss';
export function Footer(): JSX.Element {
  const navigate = useNavigate();
  return (
    <footer>
      <h1>Belarnimes</h1>
      <p>© Copyright Better Anime 2022 - Todos os direitos reservados</p>
      <div className="links">
        <p className="link" onClick={() => navigate('/')}>
          Home
        </p>
        <p className="link" onClick={() => navigate('/lastAnimes')}>
          Animes
        </p>
        <p className="link" onClick={() => navigate('/contato')}>
          Contato
        </p>
      </div>
    </footer>
  );
}
