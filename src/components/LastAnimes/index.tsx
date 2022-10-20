import { useContext } from 'react';
import Context from '../../context/context';
// import { CategoriesDivider } from '../CategoriesDivider';
import './style.scss';

export function LastAnimes(): JSX.Element {
  const { currentSeasons } = useContext(Context);

  return (
    <div className="body-animes">
      <div className="last-animes">
        {currentSeasons.slice(0, 15).map((a) => (
          <div
            key={a.mal_id}
            className="card-anime"
            // // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            style={{
              backgroundImage: `url(${a.images.jpg.large_image_url})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <p>{`${Number(a.episodes)} episódios`}</p>
            <p>{a.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
