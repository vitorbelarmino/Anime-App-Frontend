/* eslint-disable multiline-ternary */
import { useContext } from 'react';
import { logoMarca, logoMarcaSimples } from '../../assets';
import Context from '../../context/context';
import { useWindowSize } from '../../hooks/useWindowsSize';
import { Hamburger } from './hamburger';
import { HeaderImg } from './img';
import { HeaderLinks } from './links';
import { HeaderProfile } from './profile';
import { Search } from './search';
import './style.scss';

export function Header(): JSX.Element {
  const { searchActive, hamburgerActive } = useContext(Context);

  const size = useWindowSize();

  const small = 530;
  const medium = 1060;

  return (
    <>
      {size > medium && (
        <header>
          <div className="header-content">
            <HeaderImg image={logoMarca} width={230} />
            <HeaderLinks />
            <HeaderProfile />
          </div>
        </header>
      )}

      {size <= medium && size > small && (
        <header>
          <div className="header-content">
            <Hamburger />
            {searchActive && size <= 740 ? (
              <HeaderImg image={logoMarcaSimples} width={40} />
            ) : (
              <HeaderImg image={logoMarca} width={190} />
            )}
            <HeaderProfile />
          </div>

          {hamburgerActive && <HeaderLinks />}
        </header>
      )}

      {size <= small && (
        <header>
          <div className="header-content">
            <Hamburger />
            {size > 410 ? (
              <HeaderImg image={logoMarca} width={190} />
            ) : (
              <HeaderImg image={logoMarcaSimples} width={40} />
            )}
            <HeaderProfile />
          </div>
          {searchActive && <Search />}
          {hamburgerActive && <HeaderLinks />}
        </header>
      )}
    </>
  );
}
