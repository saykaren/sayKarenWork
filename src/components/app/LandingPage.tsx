import React, { useState } from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import FrontPage from "./FrontPage";
import HeroPicture from "./HeroPicture";
import LogoState from "./LogoState";
import MyWork from "./MyWork";

interface LandingPageProps {
    activeItem: string;
}

const LandingPage = ({activeItem}: LandingPageProps) => {

  return (
    <>
      {activeItem === "Home" && (
        <>
         <main className="heroSection" id="heroImage">
            <h1 id="heroText2">
              Karen Garcia
              <section id="heroTitle">Front End Developer</section>
            </h1>
            
          </main>
          <HeroPicture />
          <FrontPage/>
         
        </>
      )}
      {activeItem === "MyWork" && <MyWork/>}
      {activeItem === "AboutMe" && <AboutMe/>}
      {activeItem === "ContactMe" && <ContactMe/>}
      <a href="https://saykaren.github.io/OldSchool/" target="_blank" rel="noopener noreferrer" id="Greyson">
      Greyson
    </a>
    </>
  );
};

export default LandingPage;
