import React, { FC, useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { movie } from '../../../../api/movies'
import { MovieType } from '../../../../types/index'
import './slider.css'

interface Props {
    data?: MovieType,
}

const Slider: FC<Props> = () => {
    const [movies, setMovies] = useState<MovieType[]>();

    useEffect(() => {
        movie.getPopular().then((response) => {
            setMovies(response);
        })
    }, []);

    const imgBase = "https://image.tmdb.org/t/p/"
    const imgWith = "w1280"

    const topFive = movies && movies.slice(0, 5)

    // const topMovies = movies && movies.filter(movie => movie.vote_average >= 8)

    return (
        <>
            <Carousel fade>
                {topFive && topFive.map((movie: MovieType) => (
                    <Carousel.Item interval={1800}>
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