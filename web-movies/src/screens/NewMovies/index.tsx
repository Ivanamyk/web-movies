import React from 'react'
import { Header, Footer } from '../../components/Layout/components'
import { CardMovies } from './components/CardMovies'

const NewMovies = () => {
    return (
        <>
            <Header />
            <CardMovies />
            <Footer />
        </>
    )
}
export { NewMovies }