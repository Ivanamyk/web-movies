import React, { FC } from 'react'
import { PopLogo } from './components/PopLogo'
import './navBar.css'

const NavBar: FC = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <PopLogo />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><svg viewBox="0 0 100 80" width="40" height="40">
                            <rect width="80" height="10"></rect>
                            <rect y="25" width="80" height="10"></rect>
                            <rect y="50" width="80" height="10"></rect>
                        </svg></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="./home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./new-movies">Últimos Lanzamientos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./popular">Populares</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./search">Buscar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export { NavBar }