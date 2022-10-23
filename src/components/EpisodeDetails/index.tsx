import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IAnime } from '../../interfaces/IAnime';
import { IEpisode } from '../../interfaces/IEpisode';
import { fetchAnimeById, fetchEpisodeDetails } from '../../utils/api';

export function EpisodeDetails(): JSX.Element {
  const { id, episode } = useParams();
  const navigate = useNavigate();

  interface IAnimeDetails {
    anime: IAnime;
    episode: IEpisode;
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
      const anime = await fetchAnimeById(Number(animeId));
      setAnimeDetails({ anime, episode });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEpisode(id, episode).catch((err) => console.log(err));
  }, []);
  console.log(animeDetails.anime);
  console.log(animeDetails.episode);

  return (
    <div>
      {!loading && (
        <div>
          <img
            src={animeDetails?.anime.images.jpg.large_image_url}
            alt={`${animeDetails.anime.title} image`}
          />
          <div className="EpisodeInfos">
            <h1>{animeDetails.episode.title}</h1>
            <p>{`Duration: ${(animeDetails.episode.duration / 60).toFixed(
              1
            )}`}</p>
            <p>{animeDetails.episode.synopsis}</p>
            <p>{'Synopsis: ' + animeDetails.episode.synopsis.toString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}
