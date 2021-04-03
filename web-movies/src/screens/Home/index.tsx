import React, { FC } from 'react'
import { Header, Footer } from '../../components/Layout/components'
import { Slider, List } from './components'
import './home.css'

const Home: FC = () => {
    return (
        <>
            <Header />
            <div className="main-pg">
                <Slider />
                <List />
            </div>
            <Footer />
        </>
    )
}
export { Home }