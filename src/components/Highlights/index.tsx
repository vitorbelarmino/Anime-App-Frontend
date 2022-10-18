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
          <p className="imageBox">
            <img src={a.images.jpg.large_image_url} alt={a.title} />
          </p>
          <div className="subCard">
            <p className="duration">{`${a.duration.slice(0, 2)} min`}</p>
            <div className="genre">
              {a.genres.map((genre, index) => (
                <div key={index}>
                  <p>{genre.name}</p>
                </div>
              ))}
            </div>
            <p>{a.title}</p>
            {a.synopsis !== null && (
              <div className="highlights-synopsis">
                <p>{sliceString(a.synopsis, 160)}</p>
              </div>
            )}
            <button>Assistir</button>
          </div>
        </div>
      ))}
    </div>
  );
}
