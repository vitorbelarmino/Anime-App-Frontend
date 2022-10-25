import { IAnime } from '../interfaces/IAnime';
import axios from 'axios';
import { ILatestEpisodes } from '../interfaces/ILatestEpisodes';
import { IEpisode } from '../interfaces/IEpisode';

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

export async function fetchAnimeById(id: number): Promise<IAnime> {
  const { data } = await api.get(`/anime/${id}/full`);

  return data.data;
}

export async function fetchEpisodeDetails(
  animeId: number,
  episodeId: number
): Promise<IEpisode> {
  const { data } = await api.get(`/anime/${animeId}/episodes/${episodeId}`);
  return data.data;
}

export async function fetchEpisodeDetailsList(
  animeId: number
): Promise<IEpisode[]> {
  const { data } = await api.get(`/anime/${animeId}/episodes`);
  return data.data;
}

export async function fetchRandomAnimeId(): Promise<number> {
  const { data } = await api.get('/random/anime');
  return data.data.mal_id as number;
}
