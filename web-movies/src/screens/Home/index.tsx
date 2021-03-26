import React, { FC } from 'react'
import { Header, Footer } from '../../components/Layout/components'
import { Main } from '../../components/Main'

const Home: FC = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}
export { Home }