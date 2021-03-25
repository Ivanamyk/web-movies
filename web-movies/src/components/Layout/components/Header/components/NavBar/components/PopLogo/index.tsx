import React, { FC } from 'react'
import PopPic from '../../../../../../../../assets/img/popcorn.png'
import './popLogo.css'

const PopLogo: FC = () => {
    return (
        <div className="d-flex popLogo">
            <img src={PopPic} alt="Popcorn img" height="55" />
        </div>
    )
}
export { PopLogo }