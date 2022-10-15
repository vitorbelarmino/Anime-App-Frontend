import { IAnime } from '../interfaces/IAnime';
import api from '../utils/api';
export async function fetchAllAnimes(): Promise<IAnime[]> {
  const { data } = await api.get('/anime');
  return data.data;
}
export async function fetchHighlights(): Promise<IAnime[]> {
  const { data } = await api.get('/seasons/now?limit=6');
  return data.data;
}
