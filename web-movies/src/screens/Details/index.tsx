import React, { FC, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Header, Footer } from './../../components/Layout/components'
import { movie } from './../../api/movies'
import { MovieType } from '../../types';
import { IdMovie } from './components/IdMovie'
import './details.css'

const Details: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
    const id = match.params.id
    const [details, setDetails] = useState<MovieType | undefined>(undefined);

    useEffect(() => {
        movie.getId(id).then((response) => {
            setDetails(response);
        })
    }, []);

    return (
        <>
            <Header />
            <div className="main-pg">
                {details
                    ? <IdMovie movie={details} />
                    : ''}
            </div>
            <Footer />
        </>
    )
}
export { Details }