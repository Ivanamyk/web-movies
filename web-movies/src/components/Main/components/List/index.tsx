import React, { useEffect, useState, FC } from 'react'
import { MovieType } from '../../../../types'
import { movie } from '../../../../api/movie'
import './list.css'

const List: FC = () => {
    const [movies, setMovies] = useState<MovieType[]>();

    useEffect(() => {
        movie.getPopular().then((response) => {
            setMovies(response);
        })
    }, []);
    //hacer map!
    console.log(movies)

    return (
        <div className='row justify-content-center mt-5'>
            <div className='col-4 list-table'>
                <ul className="list-group">
                    <h4 className="list-group-item header-list">Peliculas Populares</h4>

                    <li className="list-group-item">item</li>
                </ul>
            </div>
            <div className='col-4 list-table'>
                <ul className="list-group">
                    <h4 className="list-group-item header-list">Peliculas Mejor Puntadas</h4>
                    <li className="list-group-item">item</li>
                </ul>
            </div>
        </div>
    )
}
export { List }