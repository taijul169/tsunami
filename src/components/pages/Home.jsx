import React from 'react';
import Header from  '../mini-components/Header';
import Hero from  '../mini-components/Hero';
import Footer from  '../mini-components/Footer';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header
               linkOne={<li><NavLink to="/market">Market</NavLink></li> }
               
            />
            <Hero/>
            <Footer/>
        </div>
    )
}

export default Home
