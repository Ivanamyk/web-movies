import React, { FC, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import Loader from "react-loader-spinner";
import { MovieType } from './../../types'
import { movie } from './../../api/movies'
import { Paginator, Cards, Layout } from './../../components'

const NewMovies: FC<RouteComponentProps<{ pag: string }>> = ({ match }) => {
    const page = parseInt(match.params.pag)
    const [totalPages, setTotalPages] = useState<number>();
    const [latestMovies, setlatestMovies] = useState<MovieType[]>();

    useEffect(() => {
        movie.getLatestData()
            .then((response) => {
                console.log(response)
                setTotalPages(response.total_pages)
            })
    }, []);

    useEffect(() => {
        movie.getLatest(page).then((response) => {
            setlatestMovies(response);
        })
    }, [page])
    return (
        <>
            <Layout>
                <Cards pag={page}
                    moviesList={latestMovies} />
                <Paginator totPages={totalPages} />
            </ Layout>
        </>
    )
}
export { NewMovies }