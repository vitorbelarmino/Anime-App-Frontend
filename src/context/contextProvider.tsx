import { ReactNode, useEffect, useMemo, useState } from 'react';
import { IAnime } from '../interfaces/IAnime';
import { ILatestEpisodes } from '../interfaces/ILatestEpisodes';
import {
  fetchAllAnimes,
  fetchCurrentSeasons,
  fetchLatestEpisodes
} from '../utils/api';
import Context from './context';

interface IProps {
  children: ReactNode | ReactNode[];
}
export function ContextProvider({ children }: IProps): JSX.Element {
  const [allAnimes, setAllAnimes] = useState<IAnime[]>([]);
  const [currentSeasons, setCurrentSeasons] = useState<IAnime[]>([]);
  const [latestEpisodes, setLatestEpisodes] = useState<ILatestEpisodes[]>([]);

  const getAnime = async (): Promise<void> => {
    const result = await fetchAllAnimes();
    setAllAnimes(result);
  };

  const getHighlights = async (): Promise<void> => {
    const result = await fetchCurrentSeasons();
    setCurrentSeasons(result);
  };

  const getLatestEpisodes = async (): Promise<void> => {
    const bannedImage =
      'https://cdn.myanimelist.net/images/icon-banned-youtube-rect.png';
    const result = await fetchLatestEpisodes();
    result.forEach((e) => console.log(e.entry.images.jpg.image_url));
    const filter = result.filter(
      (e) => e.entry.images.jpg.image_url !== bannedImage
    );
    setLatestEpisodes(filter);
  };

  useEffect(() => {
    getAnime().catch((err) => console.log(err));
    getHighlights().catch((err) => console.log(err));
    getLatestEpisodes().catch((err) => console.log(err));
  }, []);

  const value = useMemo(
    () => ({ allAnimes, setAllAnimes, currentSeasons, latestEpisodes }),
    [allAnimes, setAllAnimes, currentSeasons, latestEpisodes]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
