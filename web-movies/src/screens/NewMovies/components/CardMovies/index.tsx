import React, { FC, useState, useEffect } from 'react'
import { movie } from '../../../../api/movies'
import { MovieType } from '../../../../types';
import * as Icon from 'react-bootstrap-icons'
import { Card, Button } from 'react-bootstrap'
import './newMovies.css'


const CardMovies: FC = () => {
    const [newMovies, setNewMovies] = useState<MovieType[]>();

    useEffect(() => {
        movie.getNewMovies().then((response) => {
            setNewMovies(response);
        })
    }, []);

    const imgBase = "https://image.tmdb.org/t/p/"
    const imgWith = "w300"

    return (
        <>
            <div className="main-pg">
                <h2 className="page-title">Últimos Lanzamientos</h2>
                <div className='row'>
                    {newMovies && newMovies.map((movie: MovieType) => (
                        <Card className='nm-card' style={{ width: '15rem' }}>
                            <Card.Img className='card-img' variant="top" title={movie.title} src={imgBase + imgWith + movie.poster_path} />
                            <Card.Title className="nm-title">{movie.title}</Card.Title>
                            <Button className='eye-btn' type='button' href={"/details/" + movie.id}>
                                <Icon.EyeFill size={20} />
                            </Button>
                        </Card>
                    ))
                    }
                </div>
            </div>
        </>
    )
}
export { CardMovies }