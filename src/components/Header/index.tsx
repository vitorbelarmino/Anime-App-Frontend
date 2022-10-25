import { User, Shuffle, MagnifyingGlass } from 'phosphor-react';
import { Link, useNavigate } from 'react-router-dom';
import { logoMarca } from '../../assets';
import { fetchRandomAnimeId } from '../../utils/api';
import './style.scss';
export function Header(): JSX.Element {
  const tags = [
    { name: 'Home', path: '/' },
    { name: 'animes', path: '/lastAnimes' },
    { name: 'Últimos episódios', path: '/lastEpisodes' },
    { name: 'Contato', path: '/contato' }
  ];
  const navigate = useNavigate();

  const redirect = async (): Promise<boolean> => {
    const animeId = await fetchRandomAnimeId();
    navigate(`/anime/${animeId}`);
    return true;
  };
  return (
    <header>
      <img
        src={logoMarca}
        alt="logo"
        width="230px"
        onClick={() => navigate('/')}
      />
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
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={redirect}
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
