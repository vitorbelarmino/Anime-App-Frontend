/* eslint-disable multiline-ternary */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IAnime } from '../../interfaces/IAnime';
import { IEpisode } from '../../interfaces/IEpisode';
import {
  fetchAnimeById,
  fetchEpisodeDetails,
  fetchEpisodeDetailsList
} from '../../utils/api';
import { Loading } from '../loading';
import './style.scss';

interface IAnimeDetails {
  anime: IAnime;
  episode: IEpisode;
  episodeList: IEpisode[];
}

export function EpisodeDetails(): JSX.Element {
  const { id, episode } = useParams();

  const navigate = useNavigate();

  const [animeDetails, setAnimeDetails] = useState<IAnimeDetails>(
    {} as IAnimeDetails
  );

  const [loading, setLoading] = useState<boolean>(true);

  const getEpisode = async (
    animeId: string | undefined,
    episodeId: string | undefined
  ): Promise<void> => {
    try {
      setLoading(true);
      const episode = await fetchEpisodeDetails(
        Number(animeId),
        Number(episodeId)
      );
      const episodeList = await fetchEpisodeDetailsList(Number(animeId));
      const anime = await fetchAnimeById(Number(animeId));
      setAnimeDetails({ anime, episode, episodeList });
      console.log(animeDetails.episodeList);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEpisode(id, episode).catch((err) => console.log(err));
    console.log(animeDetails);
  }, [episode, id]);

  return (
    <div className="episode-container">
      {loading ? (
        <Loading />
      ) : (
        <div className="content-container">
          <div className="content-top">
            <img
              src={animeDetails.anime.images.jpg.large_image_url}
              alt={`${animeDetails.anime.title} image`}
              className="episode-image"
            />
            <div className="episode-info">
              <h1>{animeDetails.episode.title}</h1>
              <p>{`Duration: ${Math.ceil(
                animeDetails.episode.duration / 60
              )} min`}</p>
              <p>{`Synopsis: ${animeDetails.episode?.synopsis}`}</p>
            </div>
          </div>
          <div className="episodes-list">
            {animeDetails.episodeList.slice(0, 8).map((ep, index) => (
              <div
                key={ep.mal_id}
                className="episode-card"
                onClick={() =>
                  navigate(`/anime/${id as string}/episode/${ep.mal_id}`)
                }
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
