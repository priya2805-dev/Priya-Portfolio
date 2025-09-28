import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* About Me */}
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          I'm Priya Solanki, a React.js Developer with 2 years of experience
          building responsive and interactive web applications. I specialize
          in frontend development, creating clean and scalable web solutions.
        </p>
      </div>

      {/* Education */}
      <div className="education">
        <h2>Education</h2>
        <div className="edu-item">
          <h3>MCA – XYZ University (2023)</h3>
          <p>Focus: Web Development, React.js, JavaScript</p>
        </div>
        <div className="edu-item">
          <h3>BSc – ABC College (2021)</h3>
          <p>Focus: Computer Science</p>
        </div>
      </div>

      {/* Experience */}
      <div className="experience">
        <h2>Experience</h2>
        <div className="exp-item">
          <h3>React Developer – Bittechno Solution (2023–2025)</h3>
          <ul>
            <li>Built responsive React web applications for clients</li>
            <li>Integrated APIs and payment gateways</li>
            <li>Optimized apps for performance and scalability</li>
          </ul>
        </div>
        <div className="exp-item">
          <h3>Internship / Freelance Projects</h3>
          <ul>
            <li>Worked on personal React projects demonstrating skills</li>
            <li>Implemented interactive UI components and routing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
