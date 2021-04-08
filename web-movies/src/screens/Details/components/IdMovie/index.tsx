import React, { FC } from 'react'
import { MovieType } from '../../../../types';
import { Genre } from './../../../../types'
import { Card } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import './idMovies.css'

interface Props {
    movie: MovieType,
}

const imgBase = "https://image.tmdb.org/t/p/"
const imgWidth = "w500"
const bgWidth = "w1280"

const IdMovie: FC<Props> = ({ movie }) => {
    return (
        <>
            <div className='container col-10' style={{
                backgroundImage: `${imgBase + bgWidth + movie.backdrop_path}`
            }}>
                <div className='row'>
                    <div className='col-5'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={imgBase + imgWidth + movie.poster_path} />
                        </Card>
                    </div>
                    <div className='data-header col-5'>
                        <h2>{movie.title}</h2>
                        <span>{movie.release_date.slice(0, 4)}</span>
                        <button className='btn btn-dark m-3'><Icon.PlayCircle /> ver trailer</button>
                        <div className='data-info'>
                            <h3>General</h3>
                            <p>{movie.overview}</p>
                            <h4>Géneros</h4>
                            <u>
                                {movie.genres && movie.genres.map((movie: Genre) => (
                                    <li>{movie.name}</li>
                                ))
                                }
                            </u>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export { IdMovie }