import React from "react";
import instaIcon from "../../assets/instagram.png";
import LinkdinIcon from "../../assets/linkedin.png";
import GithubIcon from "../../assets/github.png";
import EmailIcon from "../../assets/Email.png";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gqlf0ns", "template_9d8msvt", form.current, {
        publicKey: "JEccC7S69qSTO5wlB",
      })
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Let’s Build Something Together – Send a Message!
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            name="message"
            className="msg"
            placeholder="Your Message"
            rows="5"
          />
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={instaIcon} alt="InstaIcon" className="link" />
            <img src={LinkdinIcon} alt="LinkdinIcon" className="link" />
            <img src={GithubIcon} alt="GithubIcon" className="link" />
            <img src={EmailIcon} alt="EmailIcon" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
