import React from "react";
import business from "../assets/baseline_business_white_18dp.png";
import chat from "../assets/Chat.png";
import email from "../assets/Email.png";

const ContactMe = () => (
  <main className="contactMe">
    <section id="contactTitle">
      <span className="strong">Contact Me</span>
    </section>
    <section id="email" className="contactMeDetails">
      <div className="contactLine">
        <img src={email} alt="email" />
        <a href="mailto:saykaren@gmail.com" className="App-link">
          <span className="contactRow">sayKaren@gmail.com</span>
        </a>
      </div>
      <div className="contactLine">
        <img src={chat} alt="call" />
        <a href="tel:+3039468405" className="App-link">
          <span className="contactRow"> 303.946.8405</span>
        </a>
      </div>
      <div className="contactLine">
        <img src={business} alt="Location" />{" "}
        <span className="contactRow">Thornton, CO</span>
      </div>
    </section>
  </main>
);

export default ContactMe;
