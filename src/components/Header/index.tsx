import { User, Shuffle, MagnifyingGlass } from 'phosphor-react';
import { logoMarca } from '../../assets';
import './style.scss';
export function Header(): JSX.Element {
  const tags = ['Home', 'Aplicativos', 'Discord', 'Contato'];
  return (
    <header>
      <img src={logoMarca} alt="logo" width="230px" />
      <div className="center">
        {tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
      <div className="right">
        <MagnifyingGlass
          size={40}
          weight="bold"
          color="rgb(179, 175, 175)"
          className="icon"
        />
        <Shuffle
          size={40}
          weight="bold"
          color="rgb(179, 175, 175)"
          className="icon"
        />
        <User
          size={40}
          weight="bold"
          color="rgb(179, 175, 175)"
          className="icon"
        />
      </div>
    </header>
  );
}
