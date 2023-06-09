
import '../Navbar/Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
<> <header className="fixed-header">
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <nav className="navbar navbar-expand-lg col mt-4 op">
              <div className="container-fluid">
                <div >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/"
                        className="nav-link"
                        activeClassName="active"
                        
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/aboutus"
                        className="nav-link"
                        activeClassName="active"
                        
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/book"
                        className="nav-link"
                        activeClassName="active"
                      >
                        Book
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/contactus"
                        className="nav-link"
                        activeClassName="active"
                     
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/login"
                        className="nav-link"
                        activeClassName="active"
              
                      >
                        Login
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="col"></div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
