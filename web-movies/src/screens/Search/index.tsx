import React, { FC, ChangeEvent, useEffect, useState } from "react"
import { movie } from './../../api/movies'
import { MovieType } from '../../types';
import { useHistory } from "react-router-dom";
import { Form, Card, Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { Header, Footer } from '../../components/Layout/components'
import './search.css'

const Search: FC = () => {
    const [query, setQuery] = useState('');
    const [movieCard, setMovieCard] = useState<MovieType[]>();

    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const searchQuery = urlParams.get('query')

    const history = useHistory();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        movie.getSearch(query);
    };

    useEffect(() => {
        movie.getSearch(query).then((response) => {
            setMovieCard(response);
            history.push(`/search?s=${query}` ?? 'a');
        })
    }, [query]);

    const imgBase = "https://image.tmdb.org/t/p/"
    const imgWith = "w300"

    return (
        <>
            <Header />
            <div className="main-pg">
                <Form className='container col-6 search-group'>
                    <Form.Group controlId="formBasicEmail">
                        <h4 className='title-search'>Buscar Peliculas</h4>
                        <Form.Control className='search-bar' type="text" value={query} onChange={onChange} />
                    </Form.Group>
                </Form>
                <div className='row'>
                    {movieCard && movieCard.map((movie: MovieType) => (
                        <Card className='search-card' style={{ width: '15rem' }}>

                            <Card.Img variant="top" src={imgBase + imgWith + movie.poster_path} />

                            <Card.Body className='card-body'>
                                <Card.Title>{movie.title}</Card.Title>
                                <Button className='eye-button' type='button' href={"/details/" + movie.id}>
                                    <Icon.EyeFill size={20} />
                                </Button>
                            </Card.Body>
                        </Card>
                    ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}
export { Search }