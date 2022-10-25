import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';
// import { CategoriesDivider } from '../CategoriesDivider';
import './style.scss';

interface IProps {
  quantity: number;
  description?: string;
}

export function LastAnimes(props: IProps): JSX.Element {
  const { currentSeasons } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="body-animes">
      {props.description != null && <h1>{props.description}</h1>}
      <div className="last-animes">
        {currentSeasons.slice(0, props.quantity).map((a) => (
          <div
            key={a.mal_id}
            className="card-anime"
            style={{
              backgroundImage: `url(${a.images.jpg.large_image_url})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            onClick={() => navigate(`/anime/${a.mal_id}`)}
          >
            <p>{`${Number(a.episodes)} episódios`}</p>
            <p>{a.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
