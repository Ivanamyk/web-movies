import React, { FC, useState, useEffect } from 'react'
import CarrImg from '../../../../assets/img/roses.jpg'
import { Carousel } from 'react-bootstrap'
import { movie } from '../Slider/movie'
import { MovieType } from '../../../../types/index'
import './slider.css'

interface Props {
    data?: MovieType,
}

const Slider: FC<Props> = ({ data }) => {
    const [movies, setMovies] = useState<MovieType[]>();

    useEffect(() => {
        movie.getPopular().then((response) => {
            setMovies(response);
        })
    }, []);

    const imgBase = "https://image.tmdb.org/t/p/"
    const imgWith = "w500"

    // const topFive = movies && movies.slice(0, 3)

    // const topMovies = movies && movies.filter(movie => movie.vote_average >= 8)

    return (
        <>
            <Carousel fade>
                {movies && movies.map((movie: MovieType) => (
                    <Carousel.Item interval={1700}>
                        <img
                            className="d-block slider"
                            src={imgBase + imgWith + movie.backdrop_path}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className='movie-descrip'>
                                <h3>{movie.title}</h3>
                                <p>{movie.overview}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
                }
            </Carousel>
        </>
    )
}
export { Slider }