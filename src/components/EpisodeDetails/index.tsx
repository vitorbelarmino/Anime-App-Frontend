import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IAnime } from '../../interfaces/IAnime';
import { IEpisode } from '../../interfaces/IEpisode';
import {
  fetchAnimeById,
  fetchEpisodeDetails,
  fetchEpisodeDetailsList
} from '../../utils/api';
import './style.scss';

export function EpisodeDetails(): JSX.Element {
  const { id, episode } = useParams();

  interface IAnimeDetails {
    anime: IAnime;
    episode: IEpisode;
    episodeList: IEpisode[];
  }

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
  }, []);

  return (
    <div className="episode-container">
      {!loading && (
        <div className="content-container">
          <img
            src={animeDetails?.anime.images.jpg.large_image_url}
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
      )}
    </div>
  );
}
