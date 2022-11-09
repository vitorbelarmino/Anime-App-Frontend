import { createContext } from 'react';
import { IAnime } from '../interfaces/IAnime';
import { ILatestEpisodes } from '../interfaces/ILatestEpisodes';

interface IProvider {
  allAnimes: IAnime[];
  setAllAnimes: React.Dispatch<React.SetStateAction<IAnime[]>>;
  currentSeasons: IAnime[];
  latestEpisodes: ILatestEpisodes[];
  searchActive: boolean;
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
  hamburgerActive: boolean;
  setHamburgerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<IProvider>(null!);

export default Context;
