import React, { FC, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Layout } from './../../components/Layout'
import { movie } from './../../api/movies'
import { MovieType } from '../../types';
import { IdMovie, Spinner } from './components'

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
            <Layout>
                <div>
                    {details
                        ? <IdMovie movies={details} />
                        : <Spinner />
                    }
                </div>
            </ Layout>
        </>
    )
}
export { Details }
