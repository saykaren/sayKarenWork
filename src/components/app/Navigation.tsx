import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
// import MyWork from "./MyWork";
// import ContactMe from "./ContactMe";
// import AboutMe from "./AboutMe";
// import Home from "./HomeSection";
// import NotFound from "./NotFound.js";

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
          <div className="" onClick={() => toggleActive("Home")}>
            Home
          </div>
          <div className="" onClick={() => toggleActive("MyWork")}>
            My Work
          </div>
          <div className="" onClick={() => toggleActive("AboutMe")}>
            About Me
          </div>
          <div className="" onClick={() => toggleActive("ContactMe")}>
            Contact Me
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
