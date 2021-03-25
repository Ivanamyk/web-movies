import React, { FC } from 'react'
import { PopLogo } from './components/PopLogo'
import './navBar.css'

const NavBar: FC = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <PopLogo />
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Últimos Lanzamientos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Populares</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Buscar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export { NavBar }