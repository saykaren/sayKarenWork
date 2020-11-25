import React from 'react';
import sayKarenLogo from '../assets/sayKarenTransparent.png';

const Footer = () => (
  <footer id="footer" className="footerDetails">
    <a href="https://saykaren.github.io/OldSchool/" target="_blank" rel="noopener noreferrer" id="Greyson">
      Website
    </a> created by:
    <a href="http://saykaren.com" target="_blank" rel="noopener noreferrer">
      <img
        src={sayKarenLogo}
        className="footerDetails"
        id="sayKarenLogo"
        alt="sayKaren.com"
      />
    </a>
  </footer>
);

export default Footer;
