import { useContext } from 'react';
import Context from '../../context/context';

import './style.scss';

interface IProps {
  quantity: number;
}
export function LatestEpisodes(props: IProps): JSX.Element {
  const { latestEpisodes } = useContext(Context);
  console.log(latestEpisodes);

  return (
    <div className="body-episodes">
      <div className="last-episodes">
        {latestEpisodes.slice(0, props.quantity).map((ep) => (
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
