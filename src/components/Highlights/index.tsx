import { useContext } from 'react';
import Context from '../../context/context';
import { sliceString } from '../../service';
import './style.scss';

export function Highlights(): JSX.Element {
  const { currentSeasons } = useContext(Context);

  return (
    <div className="container">
      {currentSeasons.slice(0, 6).map((a) => (
        <div key={a.mal_id} className="card">
          <span className="imageBox">
            <img src={a.images.jpg.large_image_url} alt={a.title} />
          </span>
          <div className="subCard">
            <span>{`${a.duration.slice(0, 2)} min`}</span>
            {a.genres.map((genre, index) => (
              <div key={index}>
                <span>{genre.name}</span>
              </div>
            ))}
            <span>{a.title}</span>
            {a.synopsis !== null && (
              <div className="highlights-synopsis">
                <span>{sliceString(a.synopsis, 160)}</span>
              </div>
            )}
            <button>Assistir</button>
          </div>
        </div>
      ))}
    </div>
  );
}
