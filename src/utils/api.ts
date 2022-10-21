import { IAnime } from '../interfaces/IAnime';
import axios from 'axios';
import { ILatestEpisodes } from '../interfaces/ILatestEpisodes';

const api = axios.create({
  baseURL: 'https://api.jikan.moe/v4'
});

export async function fetchAllAnimes(): Promise<IAnime[]> {
  const { data } = await api.get('/anime');
  return data.data;
}

export async function fetchCurrentSeasons(): Promise<IAnime[]> {
  const { data } = await api.get('/seasons/now');

  return data.data;
}

export async function fetchLatestEpisodes(): Promise<ILatestEpisodes[]> {
  const { data } = await api.get('/watch/episodes');

  return data.data;
}
