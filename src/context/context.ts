import { createContext } from 'react';
import { IAnime } from '../interfaces/IAnime';
interface IProvider {
  allAnimes: IAnime[];
  setAllAnimes: React.Dispatch<React.SetStateAction<IAnime[]>>;
  highlights: IAnime[];
}

const Context = createContext<IProvider>(null!);

export default Context;
