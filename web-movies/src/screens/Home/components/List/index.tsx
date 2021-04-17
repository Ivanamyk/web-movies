import React, { useEffect, useState, FC } from 'react'
import { MovieType } from '../../../../types'
import { movie } from './../../../../api/movies'
import * as Icon from 'react-bootstrap-icons'
import './list.css'

const List: FC = () => {
    const [popularMovies, setPopularMovies] = useState<MovieType[]>();
    const [topRated, setTopRated] = useState<MovieType[]>();

    useEffect(() => {
        movie.getPopularData().then((response) => {
            setPopularMovies(response.results);
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
                        {popularMovies && popularMovies.map((movie: MovieType) => (
                            <li className="list-group-item movie-item">
                                <img src={imgBase + imgWidth + movie.poster_path} className='list-img' alt="" /><span className='movie-name'>{movie.title}</span>
                                <a className='detail-button' href={"/details/" + movie.id}><Icon.ArrowRightCircle size={27} /></a>
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
                                <img src={imgBase + imgWidth + movie.poster_path} className='list-img' alt="" /><span className='movie-name'>{movie.title}</span>
                                <a className='detail-button' href={"/details/" + movie.id}><Icon.ArrowRightCircle size={27} /></a>
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
