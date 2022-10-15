import { useContext } from 'react';
import Context from '../context/context';

function Highlights(): JSX.Element {
  const { highlights } = useContext(Context);
  console.log(highlights);

  return (
    <div>
      {highlights.map((a) => (
        <div key={a.mal_id}>
          <img src={a.images.jpg.image_url} alt={a.title} />
          <div>
            <span>{`${a.duration.slice(0, 2)} min`}</span>
            {a.genres.map((genre, i) => (
              <div key={i}>
                <span>{genre.name}</span>
              </div>
            ))}
            <span>{a.title}</span>
            <span>{a.synopsis}</span>
            <button>Assistir</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Highlights;
