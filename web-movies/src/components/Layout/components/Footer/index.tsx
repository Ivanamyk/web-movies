import React, { FC } from 'react';
import popLogo from './../../../../assets/img/popcorn.png'
import './footer.css'

const Footer: FC = () => {
    return (
        <footer className="footer" id="Footer">
            <div className="d-flex">
                <div className="text-start pt-2 w-100">
                    <p className='footer-txt'><img src={popLogo} className='popLogo' /> Created x Ivana</p>
                </div>
            </div>
        </footer>
    )
}
export { Footer }