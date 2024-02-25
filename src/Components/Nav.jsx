import React, { useEffect, useState } from "react";
import "../styles/Nav.css";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/base";

function Navbar({ account, connectWallet }) {
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
            to="/myList"
            className="nav__link"
            onClick={handleNav}
          >
            My List
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
      <div>
        <Button
          style={{
            fontFamily: "Pixelify Sans",
            width: 300,
            height: 70,
            fontSize: 20,
          }}
          variant="contained"
          color="success"
          onClick={() => {
            connectWallet();
            console.log("conn wallet");
          }}
        >
          Connect Metamask
        </Button>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
