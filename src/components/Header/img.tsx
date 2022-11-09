import { useNavigate } from 'react-router-dom';

interface IImage {
  image: string;
  width: number;
}
export function HeaderImg(props: IImage): JSX.Element {
  const navigate = useNavigate();

  return (
    <img
      src={props.image}
      alt="logo"
      onClick={() => navigate('/')}
      className="logo"
      width={props.width}
    />
  );
}
