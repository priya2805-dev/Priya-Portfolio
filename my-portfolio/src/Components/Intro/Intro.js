import React from "react";
import "./Intro.css";
import bg from "../../assets/Img-bg.png";
import { Link } from "react-scroll";
import hireBtn from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello. </span>
        <span className="introText">
          I'm <span className="introName">Priya Solanki</span>
          <br /> React.js developer
        </span>
        <p className="introPara">
          From concept to code — 
          <br/>creating impactful experiences with React.
        </p>
        <Link>
          <button className="btn">
            <img src={hireBtn} alt="" className="hireBtn" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
