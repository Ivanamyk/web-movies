import React, { FC, useState, useEffect } from 'react'
import CarrImg from '../../../../assets/img/roses.jpg'
import { CardImg, Carousel } from 'react-bootstrap'
import { movie } from './../../../../api/movie'
import { MovieType } from '../../../../types/index'

interface Props {
    data?: MovieType,
}

const Carrousel: FC<Props> = ({ data }) => {
    const [movies, setMovies] = useState<MovieType[]>();

    useEffect(() => {
        movie.getPopular().then((response) => {
            setMovies(response);
        })
    }, []);
    console.log(movies)

    const imgBase = "https://image.tmdb.org/t/p/"
    const imgWith = "w500"


    return (
        <>
            <Carousel>
                {movies && movies.map((movie: MovieType) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slider"
                            src={imgBase + imgWith + movie.backdrop_path}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
                }
            </Carousel>
        </>
    )
}
export { Carrousel }