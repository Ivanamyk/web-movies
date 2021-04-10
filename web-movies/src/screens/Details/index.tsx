import React, { FC, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Header, Footer } from './../../components/Layout/components'
import { movie } from './../../api/movies'
import { MovieType } from '../../types';
import { IdMovie } from './components/IdMovie'

const Details: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
    const id = match.params.id
    const [details, setDetails] = useState<MovieType | undefined>(undefined);

    useEffect(() => {
        movie.getId(id).then((response) => {
            setDetails(response);
        })
    }, [id]);

    return (
        <>
            <Header />
            <div>
                {details
                    ? <IdMovie movies={details} />
                    : ''}
            </div>
            <Footer />
        </>
    )
}
export { Details }