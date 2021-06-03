import React from 'react';
import sayKarenLogo from '../assets/sayKarenTransparent.png';
import developer from '../assets/developer_mode.png';

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
    <a href="http://saykaren.com" target="_blank" rel="noopener noreferrer">
      <img
        src={developer}
        className="floatRight"
        id="sayKarenLogo"
        alt="developer mode"
      />
    </a>
  </footer>
);

export default Footer;
