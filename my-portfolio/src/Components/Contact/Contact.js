import React from "react";
import instaIcon from "../../assets/instagram.png";
import LinkdinIcon from "../../assets/linkedin.png";
import GithubIcon from "../../assets/github.png";
import "./Contact.css"
const Contact = () => {
  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Let’s Build Something Together – Send a Message!
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea name="message"  className="msg" placeholder="Your Message"  rows="5"/>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={instaIcon} alt="InstaIcon" className="link" />
            <img src={LinkdinIcon} alt="LinkdinIcon" className="link" />
            <img src={GithubIcon} alt="GithubIcon" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
