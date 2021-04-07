import React, { FC, useEffect, useState } from 'react'
import { movie } from './../../../../api/movies'
import { MovieType } from '../../../../types';
import { Card } from 'react-bootstrap'

interface Props {
    id: string,
}

const IdMovie: FC<Props> = ({ id }) => {
    const [details, setDetails] = useState<MovieType[]>();

    useEffect(() => {
        movie.getId('651671').then((response) => {
            setDetails(response);
        })
    }, []);


    return (
        <>
            <div className="main-pg">
                <div>
                    {details && details.map((movie: MovieType) => (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={movie.poster_path} />
                            <Card.Title>{movie.title}</Card.Title>
                        </Card>
                    ))
                    }
                </div>
                <div>
                    <h2 className="nm-title">Details</h2>
                </div>
            </div>
        </>
    )
}
export { IdMovie }