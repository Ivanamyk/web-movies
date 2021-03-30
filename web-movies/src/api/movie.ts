import { MovieType } from '../types';
import { api } from './api'

type GetMoviesResponse = {
  results: MovieType[],
  page: number,
  total_pages: number,
  total_results: number
}

const get = async (): Promise<MovieType[]> => {
  const { data } = await api.get<GetMoviesResponse>('/movie/upcoming')
  console.log(data);
  return data.results;
};
export const movie = { get };



