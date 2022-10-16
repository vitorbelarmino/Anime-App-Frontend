import { IAnime } from '../interfaces/IAnime';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.jikan.moe/v4'
});

export async function fetchAllAnimes(): Promise<IAnime[]> {
  const { data } = await api.get('/anime');
  return data.data;
}

export async function fetchHighlights(): Promise<IAnime[]> {
  const { data } = await api.get('/seasons/now?limit=6');
  return data.data;
}
