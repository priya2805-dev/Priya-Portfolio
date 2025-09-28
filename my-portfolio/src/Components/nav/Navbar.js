import React from "react";
import "./Navbar.css"
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png"

const Navbar = () => {
  return (
    <nav className="navbr">
      <img src={logo} alt="logo" className="logo" />
      <div className="dekstopMenu">
        <Link className="dekstopMenuItem">Home</Link>
        <Link className="dekstopMenuItem">About</Link>
        <Link className="dekstopMenuItem">Clients</Link>
        <Link className="dekstopMenuItem">Portfolio</Link>
      </div>

      <button className="dekstopMenuBtn">
        <img src={contactImg} alt="" className="dekstopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
