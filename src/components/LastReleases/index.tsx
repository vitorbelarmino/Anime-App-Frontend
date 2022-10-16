import { useContext } from 'react';
import Context from '../../context/context';

export function LatestEpisodes(): JSX.Element {
  const { latestEpisodes } = useContext(Context);
  console.log(latestEpisodes);

  return (
    <div className="last-episodes">
      {latestEpisodes.slice(0, 12).map((ep) => (
        <div
          key={ep.entry.mal_id}
          className="episode-card"
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          style={{ backgroundImage: `url(${ep.entry.images?.jpg.image_url})` }}
        >
          <p>{ep.entry.title}</p>
          <p>{ep.episodes[0].title}</p>
        </div>
      ))}
    </div>
  );
}
