import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { IAnime } from '../../interfaces/IAnime';
import { IEpisode } from '../../interfaces/IEpisode';
// import './style.scss';

interface IProps {
  anime: IAnime;
  episodeList: IEpisode[];
}
export function SliderComponent(props: IProps): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const navigate = useNavigate();
  console.log(props);

  return (
    <div className="episodes-list">
      <Slider {...settings}>
        {props.episodeList.map((ep, index) => (
          <div
            key={ep.mal_id}
            className="episode-card"
            onClick={() => {
              console.log(`/anime/${props.anime.mal_id}/episode/${ep.mal_id}`);

              navigate(`/anime/${props.anime.mal_id}/episode/${ep.mal_id}`);
            }}
          >
            1
            {/* <img
              src={props.anime.images.jpg.large_image_url}
              alt={`${props.anime.title} image`}
              className="list-image"
            /> */}
            <p>{`${index + 1} - ${ep.title}`}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
