import { loading } from '../../assets';
import './style.scss';
export function Loading(): JSX.Element {
  return (
    <div className="loading-container">
      <div className="text-container">
        <h1 className="text-loading">Carregando... </h1>
        <h1 className="text-loading">Aguenta ai meu rei!</h1>
      </div>
      <img src={loading} alt="Loading-image" className="loading-image" />
    </div>
  );
}
