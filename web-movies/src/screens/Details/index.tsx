import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Header, Footer } from './../../components/Layout/components'
import { IdMovie } from './components/IdMovie'


const Details: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
    const id = match.params.id

    return (
        <>
            <Header />
            <div className="main-pg">
                <IdMovie id={id} />
            </div>
            <Footer />
        </>
    )
}
export { Details }