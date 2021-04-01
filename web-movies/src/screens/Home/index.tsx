import React, { FC } from 'react'
import { Header, Footer } from '../../components/Layout/components'
import { Carrousel, List } from './components'
import './home.css'

const Home: FC = () => {
    return (
        <>
            <Header />
            <div className="main-pg">
                <Carrousel />
                <List />
            </div>
            <Footer />
        </>
    )
}
export { Home }