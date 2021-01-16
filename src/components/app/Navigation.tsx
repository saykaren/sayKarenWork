import React, { useState } from "react";

interface NavigationBarProps {
  toggleActive: (arg1: string) => void;
  navActive: boolean;
  toggleNavMenu: () => void;
}

const NavigationBar = ({
  toggleActive,
  navActive,
  toggleNavMenu,
}: NavigationBarProps) => {
  return (
    <>
      <div id="navButton" onClick={() => toggleNavMenu()}>
        {navActive ? <>&#10005;</> : <>&#9776;</>}
      </div>

      {navActive && (
        <div className="navBar">
          <div className="navBarDetails" onClick={() => toggleActive("Home")}>
            Home
          </div>
          <div className="navBarDetails" onClick={() => toggleActive("MyWork")}>
            My Work
          </div>
          {/* <div className="navBarDetails" onClick={() => toggleActive("AboutMe")}>
            About Me
          </div> */}
          <div className="navBarDetails" onClick={() => toggleActive("ContactMe")}>
            Contact Me
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
