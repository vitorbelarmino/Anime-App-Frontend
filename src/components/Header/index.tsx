import { User, Shuffle, MagnifyingGlass } from 'phosphor-react';
import './style.scss';
export function Header(): JSX.Element {
  const tags = ['Home', 'Aplicativos', 'Discord', 'Contato'];
  return (
    <header>
      <img src="https://betteranime.net/img/logo_shadow.png" alt="logo" />
      <div className="center">
        {tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
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
