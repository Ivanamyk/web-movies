import React, { FC } from 'react'
import { Header, Footer } from '../../components/Layout/components'
import { Card } from './components'
import './newMovies.css'

const NewMovies: FC = () => {
    return (
        <>
            <Header />
            <div className="main-pg">
                <h2 className="nm-title">Últimos Lanzamientos</h2>
                <Card />
            </div>
            <Footer />
        </>
    )
}
export { NewMovies }