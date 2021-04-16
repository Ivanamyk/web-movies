import React, { useEffect, useState, FC } from 'react'
import { MovieType } from '../../../../types'
import { movie } from './../../../../api/movies'
import './list.css'


const List: FC = () => {
    const [movies, setMovies] = useState<MovieType[]>();
    const [topRated, setTopRated] = useState<MovieType[]>();

    useEffect(() => {
        movie.getPopular().then((response) => {
            setMovies(response);
        })
    }, []);

    useEffect(() => {
        movie.getTopRated().then((response) => {
            setTopRated(response);
        })
    }, []);

    const imgBase = "https://image.tmdb.org/t/p/"
    const imgWidth = "w500"

    return (
        <div className='row justify-content-center mt-5'>
            <div className='col-4 list-table'>
                <ul className="list-group main-list">
                    <h4 className="list-group-item header-list">Peliculas Populares</h4>
                    <div className='scroll'>
                        {movies && movies.map((movie: MovieType) => (
                            <li className="list-group-item movie-item">
                                <img src={imgBase + imgWidth + movie.poster_path} className='list-img' alt="" /><a className='movie-name' href={"/details/" + movie.id} >{movie.title}</a>
                            </li>
                        ))
                        }
                    </div>
                </ul>
            </div>
            <div className='col-4 list-table'>
                <ul className="list-group main-list">
                    <h4 className="list-group-item header-list">Peliculas Mejor Puntuadas</h4>
                    <div className='scroll'>
                        {topRated && topRated.map((movie: MovieType) => (
                            <li className="list-group-item movie-item">
                                <img src={imgBase + imgWidth + movie.poster_path} className='list-img' alt="" /><a className='movie-name' href={"/details/" + movie.id}>{movie.title}</a>
                            </li>
                        ))
                        }
                    </div>
                </ul>
            </div>
        </div>
    )
}
export { List }