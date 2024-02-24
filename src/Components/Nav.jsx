import React, { useState } from 'react';
import '../style/Nav.css';

import { NavLink } from 'react-router-dom';


function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className="logo" ><img alt="national flag" src="https://rural.gov.in/sites/default/files/flag_india.gif"  className="swach_bharat"></img><img src= 'https://i.imgur.com/RZ03mF0.png' style={{height:"57px"}}  alt="Logo" />
      </div>
      <input type="checkbox" id="nav_check" hidden />
      <nav className={isMobileMenuOpen ? 'mobile-menu open' : 'mobile-menu'}>
        <ul>
          <li>
          <NavLink to="/" >Home</NavLink> 
          </li>
          <li>
          <NavLink to="/login">Login</NavLink> 
          </li>
          <li>
          <NavLink to="/projects" > Projects</NavLink> 
          </li>
          <li>
          <NavLink to="/report" > Reports</NavLink> 
          </li>
          <li>
          <NavLink to="/map" > Map</NavLink> 
          </li>
          <li>
          <NavLink to="/logout" > <img src="https://i.imgur.com/9jOmAgK.png" style={{width: "31px",
            height: "26px"}}></img></NavLink> 
          
          </li>
         
        </ul>
      </nav>
      <label htmlFor="nav_check" className="hamburger" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </label>
    </header>
  );
}

export default Nav;
