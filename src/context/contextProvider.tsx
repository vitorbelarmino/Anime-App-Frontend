import { ReactNode, useEffect, useMemo, useState } from 'react';
import { IAnime } from '../interfaces/IAnime';
import { fetchAllAnimes, fetchHighlights } from '../utils/api';
import Context from './context';

interface IProps {
  children: ReactNode | ReactNode[];
}
export function ContextProvider({ children }: IProps): JSX.Element {
  const [allAnimes, setAllAnimes] = useState<IAnime[]>([]);
  const [highlights, setHighlights] = useState<IAnime[]>([]);

  const getAnime = async (): Promise<void> => {
    const result = await fetchAllAnimes();
    setAllAnimes(result);
  };

  const getHighlights = async (): Promise<void> => {
    const result = await fetchHighlights();
    setHighlights(result);
  };

  useEffect(() => {
    getAnime().catch((err) => console.log(err));
    getHighlights().catch((err) => console.log(err));
  }, []);

  const value = useMemo(
    () => ({ allAnimes, setAllAnimes, highlights }),
    [allAnimes, setAllAnimes, highlights]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
