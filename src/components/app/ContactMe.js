import React from 'react';
import InputRequest from './InputRequest';

const ContactMe = () => (
  <main className="contactMe">
    <section id="contactTitle">
      <span className="strong">Contact Me</span>
    </section>
    <section id="email" className="contactMeDetails">
      <i className="fa fa-envelope" aria-hidden="true"></i>
      <a href="mailto:saykaren@gmail.com" className="App-link">sayKaren@gmail.com</a>
    </section>
    <section id="phone" className="contactMeDetails">
      <i className="fa fa-phone" aria-hidden="true"></i>
      <a href="tel:+3039468405" className="App-link">303.946.8405</a>
    </section>
    <section id="address" className="contactMeDetails">
      <i className="fa fa-map-marker" aria-hidden="true"></i>
      Thornton, CO
    </section>
    <InputRequest />
  </main>
);

export default ContactMe;
