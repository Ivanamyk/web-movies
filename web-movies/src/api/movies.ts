import { MovieType, VideoType } from './../types';
import { api } from './api'

export type GetMoviesResponse = {
    results: MovieType[],
    page: number,
    total_pages: number,
    total_results: number
}

const getPopular = async (page: number): Promise<MovieType[]> => {
    const { data } = await api.get<GetMoviesResponse>(`movie/popular?page=${page}`)
    return data.results;
};

const getPopularData = async (): Promise<GetMoviesResponse> => {
    const { data } = await api.get<GetMoviesResponse>('movie/popular')
    return data;
};

const getLatest = async (page: number): Promise<MovieType[]> => {
    const { data } = await api.get<GetMoviesResponse>(`movie/upcoming?page=${page}`)
    return data.results;
};

const getLatestData = async (): Promise<GetMoviesResponse> => {
    const { data } = await api.get<GetMoviesResponse>('movie/upcoming')
    return data;
};


const getTopRated = async (): Promise<MovieType[]> => {
    const { data } = await api.get<GetMoviesResponse>(`movie/top_rated`)
    return data.results;
};

const getId = async (id: string) => {
    const data = await api.get<MovieType>('/movie/' + id)
    return data.data;
};

const getVid = async (id: string) => {
    const data = await api.get<VideoType>('/movie/' + id + '/videos')
    return data.data;

};

const getSearch = async (query: string): Promise<MovieType[]> => {
    const { data } = await api.get<GetMoviesResponse>('search/movie?query=' + query)
    return data.results;
};

export const movie = { getPopular, getPopularData, getTopRated, getLatest, getLatestData, getId, getVid, getSearch };



