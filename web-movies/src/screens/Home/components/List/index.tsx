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

    const section1 = popularMovies && popularMovies.slice(0, 9)
    const section2 = popularMovies && popularMovies.slice(11, 20)

    const trSection1 = topRated && topRated.slice(0, 9)
    const trSection2 = topRated && topRated.slice(11, 20)

    return (
        <>
            <section className='section1'>
                <div id="carouselExampleControls" className="carousel slide" data-interval="false">
                    <h4 className="slider-header"><Icon.Stars /> Top Rated</h4>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <ul className="container-slider">
                                {trSection1 && trSection1.map((movie: MovieType) => (
                                    <a className="item-slider" href={"/details/" + movie.id}>
                                        <img src={imgBase + imgWidth + movie.poster_path} className='movie-img' />
                                    </a>
                                ))
                                }
                            </ul>
                        </div>
                        <div className="carousel-item">
                            <ul className="container-slider active">
                                {trSection2 && trSection2.map((movie: MovieType) => (
                                    <a className="item-slider" href={"/details/" + movie.id}>
                                        <img src={imgBase + imgWidth + movie.poster_path} className='movie-img' />
                                    </a>
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='container container-btns'>
                        <button className="slider-btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span aria-hidden="true"><Icon.ArrowLeftCircle className='arrow fa-2x' /></span>
                        </button>
                        <button className="slider-btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span aria-hidden="true"><Icon.ArrowRightCircle className='arrow fa-2x' /></span>
                        </button>
                    </div>
                </div>
            </section>
            <section className='section2'>
                <div id="carouselExampleControls2" className="carousel slide" data-interval="false">
                    <h4 className="slider-header"><Icon.Stars /> Most Popular</h4>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <ul className="container-slider">
                                {section1 && section1.map((movie: MovieType) => (
                                    <a className="item-slider" href={"/details/" + movie.id}>
                                        <img src={imgBase + imgWidth + movie.poster_path} className='movie-img' />
                                    </a>
                                ))
                                }
                            </ul>
                        </div>
                        <div className="carousel-item">
                            <ul className="container-slider active">
                                {section2 && section2.map((movie: MovieType) => (
                                    <a className="item-slider" href={"/details/" + movie.id}>
                                        <img src={imgBase + imgWidth + movie.poster_path} className='movie-img' />
                                    </a>
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='container container-btns'>
                        <button className="slider-btn" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                            <span aria-hidden="true"><Icon.ArrowLeftCircle className='arrow2 fa-2x' /></span>
                        </button>
                        <button className="slider-btn" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                            <span aria-hidden="true"><Icon.ArrowRightCircle className='arrow2 fa-2x' /></span>
                        </button>
                    </div>
                </div>
            </section>

        </>
    )
}
export { List }
