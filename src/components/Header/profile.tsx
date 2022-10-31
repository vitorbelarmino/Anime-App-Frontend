/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable multiline-ternary */
import { MagnifyingGlass, Shuffle, User } from 'phosphor-react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/context';
import { useWindowSize } from '../../hooks/useWindowsSize';
import { fetchRandomAnimeId } from '../../utils/api';

export function HeaderProfile(): JSX.Element {
  const navigate = useNavigate();
  const size = useWindowSize();
  const { searchActive, setSearchActive, setHamburgerActive } =
    useContext(Context);

  const small = 530;
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
      {size >= medium && (
        <div className="body-right">
          <div className="right">
            {searchActive && (
              <div className="search">
                <input type="text" />
              </div>
            )}
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
            <User
              size={40}
              weight="bold"
              color="rgb(179, 175, 175)"
              className="icon"
            />
          </div>
        </div>
      )}
      {size < medium && size > small && (
        <div className="right">
          {searchActive && (
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
          <div>
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
          </div>
          <User
            size={40}
            weight="bold"
            color="rgb(179, 175, 175)"
            className="icon"
          />
        </div>
      )}
      {size <= small && (
        <div className="body-right">
          <div className="right">
            <div>
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
            </div>
            <User
              size={40}
              weight="bold"
              color="rgb(179, 175, 175)"
              className="icon"
            />
          </div>
        </div>
      )}
    </>
  );
}
