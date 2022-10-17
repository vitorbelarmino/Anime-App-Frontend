import { PlusCircle } from 'phosphor-react';
import './style.scss';

interface IProps {
  name: string;
}
export function CategoriesDivider(props: IProps): JSX.Element {
  return (
    <div className="nav-episodes">
      <div className="left">
        <PlusCircle
          size={24}
          color="rgb(21, 21, 121)"
          weight="fill"
          className="icon"
        />
        <p>{props.name}</p>
      </div>
      <div className="right">
        <div className="button">
          <div className="plus">
            <p>+</p>
          </div>
          <p>Ver mais</p>
        </div>
      </div>
    </div>
  );
}
