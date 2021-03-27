import React from 'react'
import './list.css'

const List = () => {
    return (
        <div className='row justify-content-center mt-5'>
            <div className='col-4 list-table'>
                <ul className="list-group">
                    <h4 className="list-group-item header-list">Peliculas Populares</h4>
                    <li className="list-group-item">item</li>
                </ul>
            </div>
            <div className='col-4 list-table'>
                <ul className="list-group">
                    <h4 className="list-group-item header-list">Peliculas Mejor Puntadas</h4>
                    <li className="list-group-item">item</li>
                </ul>
            </div>
        </div>
    )
}
export { List }