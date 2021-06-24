import React from 'react';
import { NavLink } from 'react-router-dom';
const Hero = () => {
    return (
        <div>
            <section className="heroSection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-12 order-1 d-flex align-items-center justify-content-center">
                            <div className="hero-content-left w-75 text-center">
                              <h1>Discover, publish and trade the <span>data you need</span></h1>
                              <p className="lead w-75" style={{margin:'auto',color:'#595959'}}>Data marketplace bringing tokenized data to #TeFi ready for both enterprise and retail use. Launching on Terra 🌖</p>
                              <div className="hero-link d-flex justify-content-center w-50 mt-5" style={{margin:'auto'}}>
                                <NavLink style={{background:'#FFF'}} className="primary-button" to="#">Docs</NavLink>
                                <NavLink style={{background:'#6463DF',color:'#FFF'}} className="primary-button" to="#">Market</NavLink>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
