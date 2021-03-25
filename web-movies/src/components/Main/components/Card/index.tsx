import React, { FC } from 'react'
import CardImg from '../../../../assets/img/zelda.jpg'


const Card: FC = () => {
    return (
        <div>
            <div className="card text-dark">
                <img src={CardImg} className="card-img" alt="zelda" height='100px'></img>
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    )
}
export { Card }