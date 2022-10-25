import { loading } from '../../assets';
import './style.scss';
export function Loading(): JSX.Element {
  return (
    <div className="loading-container">
      <h1 className="text-loading">Carregando... Aguenta ai meu rei!</h1>
      <img src={loading} alt="Loading-image" className="loading-image" />
    </div>
  );
}
