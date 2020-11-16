import React from 'react';
import sayKarenLogoWhite from '../assets/sayKarenWhite.png';
import LogoState from './LogoState';

const FrontPage = () => (
  <main className="heroSection" id="heroImage">
    <section id="stateLogo">
      <img
        src={sayKarenLogoWhite}
        className="footerDetails"
        id="sayKarenLogoFrontPage"
        alt="sayKaren.com"
      />
      <div id="stateChange">
        <LogoState />
      </div>
    </section>
  </main>
);

export default FrontPage;
