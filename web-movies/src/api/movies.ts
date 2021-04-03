import { MovieType } from './../types';
import { api } from './api'

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

const getTopRated = async (): Promise<MovieType[]> => {
    const { data } = await api.get<GetMoviesResponse>('/movie/top_rated')
    return data.results;
};

const getId = async (): Promise<MovieType[]> => {
    const { data } = await api.get<GetMoviesResponse>('/movie/{movie_id}')
    return data.results;
};

export const movie = { getPopular, getTopRated, getId };

