import React, { useState } from "react";
import "./Navbar.css"
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png"
import menu from "../../assets/menu.png"

const Navbar = () => {
 const[ShowMenu,setShowMenu] =useState("false")
  return (
    <nav className="navbr">
      <img src={logo} alt="logo" className="logo" />
      <div className="dekstopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="listitem">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listitem">About</Link>
        <Link activeClass="active" to="work" spy={true} smooth={true} offset={-50} duration={500} className="listitem">Clients</Link>
        <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="listitem">Portfolio</Link>
      </div>

      <button className="dekstopMenuBtn" onClick={()=>{
          document.getElementById("contact").scrollIntoView({behavior:"smooth"})
        }}>
        <img src={contactImg} alt="" className="dekstopMenuImg"  />
        Contact Me
      </button>
      <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!ShowMenu)} />
      <div className="NavMenu" style={{display:ShowMenu?"flex":"none"}}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>setShowMenu(false)} >Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="work" spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>setShowMenu(false)}>Clients</Link>
        <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
