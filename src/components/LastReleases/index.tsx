import { Cookie, Plus, PlusCircle } from 'phosphor-react';
import { useContext } from 'react';
import Context from '../../context/context';
import './style.scss';

export function LatestEpisodes(): JSX.Element {
  const { latestEpisodes } = useContext(Context);
  console.log(latestEpisodes);

  return (
    <div className="body-episodes">
      <div className="nav-episodes">
        <div className="left">
          <PlusCircle
            size={50}
            color="#1409ae"
            weight="bold"
            className="icon"
          />
          <h2>Últimos Lançamentos</h2>
        </div>
        <div className="right">
          <p className="button">
            <Plus size={24} color="#fcfcfc" weight="light" className="icon" />
            Ver mais
          </p>
        </div>
      </div>
      <div className="last-episodes">
        {latestEpisodes.slice(0, 12).map((ep) => (
          <div
            key={ep.entry.mal_id}
            className="episode-card"
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            style={{
              backgroundImage: `url(${ep.entry.images?.jpg.large_image_url})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <p>{ep.entry.title}</p>
            <p>{ep.episodes[0].title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
