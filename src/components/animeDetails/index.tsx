import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IAnime } from '../../interfaces/IAnime';
import { fetchAnimeById } from '../../utils/api';
import './style.scss';

export function AnimeDetails(): JSX.Element {
  const [animeDetails, setAnimeDetails] = useState<IAnime>({} as IAnime);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const getAnime = async (): Promise<void> => {
    try {
      setLoading(true);
      const anime = await fetchAnimeById(Number(id));
      const url = anime.trailer.url?.replace('autoplay=', '');
      console.log(url);
      setAnimeDetails(anime);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAnime().catch((err) => console.log(err));
  }, [id, setAnimeDetails]);
  console.log(animeDetails);

  return (
    <div className="anime-container">
      {!loading && (
        <div className="content-container">
          <div className="content-top">
            <img
              src={animeDetails.images.jpg.large_image_url}
              alt={`${animeDetails.title} image`}
              className="anime-image"
            />
            <div className="anime-info">
              <div className="anime-info-top">
                <div className="anime-info-left">
                  <h1>{animeDetails.title}</h1>
                  <div className="anime-length">
                    <p className="anime-length-content">{`Number of episodes: ${
                      animeDetails.episodes as number
                    }`}</p>
                    <p className="anime-length-content">{`Duration: ${animeDetails.duration.slice(
                      0,
                      2
                    )} min per episode`}</p>
                  </div>
                  <div className="scores">
                    <div className="score-content">
                      <p>{`Score: ${animeDetails.score as number}`}</p>
                      <p>{`Ranked ${animeDetails.rank as number}`}</p>
                    </div>
                    <div className="score-content">
                      <p>{`Popularity: ${animeDetails.popularity}`}</p>
                      <p>{`Members: ${animeDetails.members}`}</p>
                    </div>
                  </div>
                </div>
                <div className="anime-info-right">
                  <iframe
                    src={animeDetails.trailer.embed_url as string}
                    frameBorder="0"
                    title={animeDetails.title}
                    className="trailer"
                  ></iframe>
                </div>
              </div>
              <p>{`Synopsis: ${animeDetails.synopsis as string}`}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
