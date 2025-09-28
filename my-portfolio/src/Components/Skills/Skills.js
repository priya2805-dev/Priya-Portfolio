import React from "react";
import "./Skills.css"
import frontDesign from "../../assets/ui-design.png";
import webDesign from "../../assets/website-design.png";
import scripting from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDsc">
        Passionate Frontend Developer skilled in building responsive,
        interactive, and high-performance websites. Strong programming and
        scripting expertise for dynamic web functionality. Focused on clean,
        maintainable code and modern web development best practices.
      </span>
      <div className="skillBars">
        <div className="skillBar">
            <img src={frontDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Frontend Developer</h2>
              <p>Expert in building responsive, high-performance web interfaces with modern frontend technologies, delivering seamless user experiences across devices</p>
            </div>
            </div>
           <div className="skillBar">
            <img src={webDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Web Developer</h2>
              <p>Skilled in designing visually compelling, structured, and responsive web layouts that enhance usability and engagement.</p>
            </div>
          </div>
           <div className="skillBar">
            <img src={scripting} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Scripting and Programming</h2>
              <p>Proficient in writing clean, efficient, and maintainable code to implement dynamic functionality and interactive web features</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Skills;
