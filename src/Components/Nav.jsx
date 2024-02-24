import React, { useState } from "react";
import "../styles/Nav.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const handleNav = () => {
    console.log("NavLink clicked!");
    setActive("nav__menu");
    setIcon("nav__toggler");
  };
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else {
      setActive("nav__menu");
    }

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else {
      setIcon("nav__toggler");
    }
  };
  const handleRedirect = (url) => {
    window.open(url, "_blank"); // Open the link in a new tab
  };
  return (
    <nav className="nav">
      <ul className={active}>
        <li className="nav__item">
          <NavLink
            style={{ fontFamily: "Pixelify Sans" }}
            to="/buy"
            className="nav__link"
            onClick={handleNav}
          >
            Buy
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            style={{ fontFamily: "Pixelify Sans" }}
            to="/track"
            className="nav__link"
            onClick={handleNav}
          >
            Track
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            style={{ fontFamily: "Pixelify Sans" }}
            to="/add"
            className="nav__link"
            onClick={handleNav}
          >
            Add
          </NavLink>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
