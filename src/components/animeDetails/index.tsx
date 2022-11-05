/* eslint-disable multiline-ternary */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IAnime } from '../../interfaces/IAnime';
import { IEpisode } from '../../interfaces/IEpisode';
import { fetchAnimeById, fetchEpisodeDetailsList } from '../../utils/api';
import { Loading } from '../loading';
import './style.scss';

interface IAnimeDetails {
  anime: IAnime;
  episodeList: IEpisode[];
}
export function AnimeDetails(): JSX.Element {
  const [animeDetails, setAnimeDetails] = useState<IAnimeDetails>(
    {} as IAnimeDetails
  );
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const getAnime = async (): Promise<void> => {
    try {
      setLoading(true);
      const anime = await fetchAnimeById(Number(id));
      const episodeList = await fetchEpisodeDetailsList(Number(id));
      setAnimeDetails({ anime, episodeList });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAnime().catch((err) => console.log(err));
  }, [id, setAnimeDetails]);
  console.log(animeDetails);

  const { anime, episodeList } = animeDetails;
  return (
    <div className="anime-container">
      {loading ? (
        <Loading />
      ) : (
        <div className="content-container">
          <div className="content-top">
            <img
              src={anime.images.jpg.large_image_url}
              alt={`${anime.title} image`}
              className="anime-image"
            />
            <div className="anime-info">
              <div className="anime-info-top">
                <div className="anime-info-left">
                  <h1>{anime.title}</h1>
                  <div className="anime-length">
                    <p>{`Number of episodes: ${anime.episodes as number}`}</p>
                    <p>{`Duration: ${anime.duration.slice(
                      0,
                      2
                    )} min per episode`}</p>
                    <p>{`Score: ${anime.score as number}`}</p>
                    <p>{`Ranked ${anime.rank as number}`}</p>
                    <p>{`Popularity: ${anime.popularity}`}</p>
                    <p>{`Members: ${anime.members}`}</p>
                  </div>
                </div>
                <div className="anime-info-right">
                  <iframe
                    src={
                      anime.trailer.embed_url?.replace(
                        'play=1',
                        'play=0'
                      ) as string
                    }
                    frameBorder="0"
                    title={anime.title}
                    className="trailer"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="synopsis">
            <p>{'Synopsis:'}</p>
            <p>{anime.synopsis}</p>
          </div>
          <div className="video">
            <p>Assista ao trailer:</p>
            <iframe
              src={
                anime.trailer.embed_url?.replace('play=1', 'play=0') as string
              }
              frameBorder="0"
              title={anime.title}
              className="trailer"
            ></iframe>
          </div>
          <div className="anime-list">
            {episodeList.slice(0, 8).map((ep, index) => (
              <div
                key={ep.mal_id}
                className="anime-card"
                onClick={() => {
                  console.log(`/anime/${id as string}/episode/${ep.mal_id}`);

                  navigate(`/anime/${id as string}/episode/${ep.mal_id}`);
                }}
              >
                <img
                  src={animeDetails.anime.images.jpg.large_image_url}
                  alt={`${animeDetails.anime.title} image`}
                  className="list-image"
                />
                <p>{`${index + 1} - ${ep.title}`}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
