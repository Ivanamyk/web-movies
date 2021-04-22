import React, { FC } from 'react';
import './footer.css'

const Footer: FC = () => {
    return (
        <footer className="footer" id="Footer">
            <div className="d-flex">
                <div className="text-start pt-2 w-100">
                    <p className='footer-txt'>🎥 Movie App by Ivana</p>
                </div>
            </div>
        </footer>
    )
}
export { Footer }