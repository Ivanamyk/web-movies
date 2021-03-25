import React, { FC } from 'react'
import { Header, Footer } from '../../components/Layout/components'
import { Card } from './components/Card'

const Home: FC = () => {
    return (
        <div>
            <Header />

            <Card />
            <h1>hola</h1>
            <h1>hola</h1>
            <h1>hola</h1>
            <h1>hola</h1>
            <h1>hola</h1>
            <Footer />
        </div>
    )
}
export { Home }