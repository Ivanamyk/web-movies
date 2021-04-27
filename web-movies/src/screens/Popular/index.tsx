import React, { FC, useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { MovieType } from './../../types'
import { movie } from './../../api/movies'
import { Layout } from '../../components/Layout'
import { Cards } from './../../components/Cards'
import { Paginator } from './../../components/Paginator'

const Popular: FC<RouteComponentProps<{ pag: string }>> = ({ match }) => {
    const page = parseInt(match.params.pag)
    const [totalPages, setTotalPages] = useState<number>();
    const [popularMovies, setPopularMovies] = useState<MovieType[]>();

    useEffect(() => {
        movie.getPopularData()
            .then((response) => {
                console.log(response)
                setTotalPages(response.total_pages)
            })
    }, []);

    useEffect(() => {
        movie.getPopular(page).then((response) => {
            setPopularMovies(response);
        })
    }, [page])

    return (
        <>
            <Layout >
                <Cards pag={page}
                    moviesList={popularMovies}
                    title='Most Popular' />
                <Paginator totPages={totalPages} />
            </ Layout>
        </>
    )
}
export { Popular }