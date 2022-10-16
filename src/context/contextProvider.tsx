import { ReactNode, useEffect, useMemo, useState } from 'react';
import { IAnime } from '../interfaces/IAnime';
import { ILatestEpisodes } from '../interfaces/ILatestEpisodes';
import {
  fetchAllAnimes,
  fetchHighlights,
  fetchLatestEpisodes
} from '../utils/api';
import Context from './context';

interface IProps {
  children: ReactNode | ReactNode[];
}
export function ContextProvider({ children }: IProps): JSX.Element {
  const [allAnimes, setAllAnimes] = useState<IAnime[]>([]);
  const [highlights, setHighlights] = useState<IAnime[]>([]);
  const [latestEpisodes, setLatestEpisodes] = useState<ILatestEpisodes[]>([]);

  const getAnime = async (): Promise<void> => {
    const result = await fetchAllAnimes();
    setAllAnimes(result);
  };

  const getHighlights = async (): Promise<void> => {
    const result = await fetchHighlights();
    setHighlights(result);
  };

  const getLatestEpisodes = async (): Promise<void> => {
    const result = await fetchLatestEpisodes();
    setLatestEpisodes(result);
  };

  useEffect(() => {
    getAnime().catch((err) => console.log(err));
    getHighlights().catch((err) => console.log(err));
    getLatestEpisodes().catch((err) => console.log(err));
  }, []);

  const value = useMemo(
    () => ({ allAnimes, setAllAnimes, highlights, latestEpisodes }),
    [allAnimes, setAllAnimes, highlights, latestEpisodes]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
