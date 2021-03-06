import React from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import HeroPicture from "./HeroPicture";
import MyWork from "./MyWork";

interface LandingPageProps {
  activeItem: string;
  setNavActive: (arg1: boolean) => void;
}

const LandingPage = ({ activeItem, setNavActive }: LandingPageProps) => {
  return (
    <span onClick={() => setNavActive(false)}>
      {activeItem === "Home" && (
        <>
          <main className="heroSection" id="heroImage">
            <h1 id="heroText2">
              <span className="name">Karen Garcia</span>
              <section id="heroTitle">Front End Developer</section>
            </h1>
          </main>
          <HeroPicture />
        </>
      )}
      {activeItem === "MyWork" && <MyWork />}
      {activeItem === "AboutMe" && <AboutMe />}
      {activeItem === "ContactMe" && <ContactMe />}
    </span>
  );
};

export default LandingPage;
