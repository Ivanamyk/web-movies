import { MovieType } from './../../../../types';
import { api } from './../../../../api/api'

type GetMoviesResponse = {
  results: MovieType[],
  page: number,
  total_pages: number,
  total_results: number
}

const getPopular = async (): Promise<MovieType[]> => {
  const { data } = await api.get<GetMoviesResponse>('/movie/popular')
  return data.results;
};
export const movie = { getPopular };



