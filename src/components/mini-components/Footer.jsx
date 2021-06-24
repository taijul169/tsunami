import React from 'react';
import { NavLink } from 'react-router-dom';
import socialOne from '../../images/social/social1.png';
import socialTwo from '../../images/social/social2.png';
import socialThree from '../../images/social/Vector.png';

const Footer = () => {
    return (
        <div>
            <footer className="w-100 d-flex align-items-center justify-content-center p-3" style={{borderTop:'2px solid #6463DF'}}>
                <div className="social-icon-wrap">
                    <NavLink to=""><img src={socialTwo} alt="social1" /></NavLink>
                    <NavLink to=""><img src={socialThree} alt="social1" /></NavLink>
                    <NavLink to=""><img src={socialOne} alt="social1" /></NavLink>
                </div>
            </footer>
        </div>
    )
}

export default Footer
