/* eslint-disable multiline-ternary */
import { PlusCircle } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowsSize';
import './style.scss';

interface IProps {
  name: string;
  path: string;
}
export function CategoriesDivider(props: IProps): JSX.Element {
  const size = useWindowSize();

  const small = 530;
  return (
    <div className="nav-episodes">
      <div className="left">
        <PlusCircle
          size={24}
          color="rgb(21, 21, 121)"
          weight="fill"
          className="icon"
        />
        {size > small ? (
          <p>{props.name}</p>
        ) : (
          <Link to={props.path} className="link">
            {props.name}
          </Link>
        )}
      </div>
      <Link to={props.path} className="right">
        <div className="button">
          <div className="plus">
            <p>+</p>
          </div>
          <p>Ver mais</p>
        </div>
      </Link>
    </div>
  );
}
