import { List } from 'phosphor-react';
import { useContext } from 'react';
import Context from '../../context/context';

export function Hamburger(): JSX.Element {
  const { setSearchActive, hamburgerActive, setHamburgerActive } =
    useContext(Context);

  return (
    <div className="hamburger">
      <List
        size={45}
        color="#fcfcfc"
        weight="light"
        values="hamburger"
        onClick={() => {
          setSearchActive(false);
          setHamburgerActive(!hamburgerActive);
        }}
      />
    </div>
  );
}
