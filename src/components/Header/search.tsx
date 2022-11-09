/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable multiline-ternary */
import { MagnifyingGlass, Shuffle } from 'phosphor-react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';
import { useWindowSize } from '../../hooks/useWindowsSize';
import { fetchRandomAnimeId } from '../../utils/api';

export function Search(): JSX.Element {
  const { searchActive, setSearchActive, setHamburgerActive } =
    useContext(Context);

  const navigate = useNavigate();

  const size = useWindowSize();

  const medium = 1060;

  const redirect = async (): Promise<void> => {
    try {
      const animeId = await fetchRandomAnimeId();
      navigate(`/anime/${animeId}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {size >= medium ? (
        <>
          <MagnifyingGlass
            size={40}
            weight="bold"
            color="rgb(179, 175, 175)"
            className="icon"
            onClick={() => {
              setHamburgerActive(false);
              setSearchActive(!searchActive);
            }}
          />
          <Shuffle
            size={40}
            weight="bold"
            color="rgb(179, 175, 175)"
            className="icon"
            onClick={redirect}
          />
        </>
      ) : (
        <div className="search">
          <Shuffle
            size={40}
            weight="bold"
            color="rgb(179, 175, 175)"
            className="icon"
            onClick={redirect}
          />
          <input type="text" />
        </div>
      )}
    </>
  );
}
