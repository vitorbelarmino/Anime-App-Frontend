import { Link } from 'react-router-dom';

export function HeaderLinks(): JSX.Element {
  const tags = [
    { name: 'Home', path: '/' },
    { name: 'Animes', path: '/lastAnimes' },
    { name: 'Últimos episódios', path: '/lastEpisodes' },
    { name: 'Contato', path: '/contato' }
  ];
  return (
    <div className="center">
      {tags.map((tag, index) => (
        <Link key={index} to={tag.path} className="link">
          {tag.name}
        </Link>
      ))}
    </div>
  );
}
