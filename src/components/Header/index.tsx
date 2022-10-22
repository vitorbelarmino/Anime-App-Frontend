import { User, Shuffle, MagnifyingGlass } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { logoMarca } from '../../assets';
import './style.scss';
export function Header(): JSX.Element {
  const tags = [
    { name: 'Home', path: '/' },
    { name: 'animes', path: '/lastAnimes' },
    { name: 'Últimos episódios', path: '/lastEpisodes' },
    { name: 'Contato', path: '/' }
  ];
  return (
    <header>
      <img src={logoMarca} alt="logo" width="230px" />
      <div className="center">
        {tags.map((tag, index) => (
          <Link key={index} to={tag.path} className="link">
            {tag.name}
          </Link>
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
