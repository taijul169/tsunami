import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.png'

const Header = (props) => {
    return (
        <div className="header-section p-2">
            <header>
              <div className="container">
                  <div className="row">
                      <div className="col-md-2 col-sm-2 col-lg-2 col-2">
                          <div className="brand-logo-wrap">
                              <NavLink to="/" className="d-flex align-items-center"><img className="img-fluid" src={logo} alt="logo.png" /><b>Tsunami</b></NavLink>
                          </div>
                      </div>
                      <div className="col-md-10 col-sm-10 col-lg-10 col-10">
                          <div className="navigation h-100 d-flex align-items-center">
                              <nav>
                                  <ul>
                                      {props.linkOne}
                                      {props.linkFive}
                                      {props.linkTwo}
                                      {props.linkThree}
                                      {props.linkFour}
                                      {/* <li><NavLink to="/signin">Logout</NavLink></li>
                                      <li><NavLink to="/signin">More Project</NavLink></li> */}
                                      {/* <li><NavLink to="/signin">Login</NavLink></li>
                                      <li><NavLink to="/signup">Register</NavLink></li> */}
                                      
                                  </ul>
                              </nav>
                          </div>
                      </div>
                  </div>
              </div>
            </header>
        </div>
    )
}

export default Header
