import { User, Shuffle, MagnifyingGlass } from 'phosphor-react';
import '../style/header.scss';
function Header(): JSX.Element {
  return (
    <header>
      <img src="https://betteranime.net/img/logo_shadow.png" alt="logo" />
      <div className="center">
        <p>Home</p>
        <p>Lista</p>
        <p>Aplicativo</p>
        <p>Discord</p>
        <p>Contado</p>
      </div>
      <div className="right">
        <MagnifyingGlass
          size={40}
          weight="bold"
          color="#fafafa"
          className="icon"
        />
        <Shuffle size={40} weight="bold" color="#fafafa" className="icon" />
        <User size={40} weight="bold" color="#fafafa" className="icon" />
      </div>
    </header>
  );
}

export default Header;
