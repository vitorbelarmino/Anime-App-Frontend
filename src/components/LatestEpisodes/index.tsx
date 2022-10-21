import { useContext } from 'react';
import Context from '../../context/context';

import './style.scss';

interface IProps {
  quantity: number;
  description?: string;
}
export function LatestEpisodes(props: IProps): JSX.Element {
  const { latestEpisodes } = useContext(Context);

  return (
    <div className="body-episodes">
      {props.description != null && <h1>{props.description}</h1>}
      <div className="last-episodes">
        {latestEpisodes.slice(0, props.quantity).map((ep) => (
          <div
            key={ep.entry.mal_id}
            className="episode-card"
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
