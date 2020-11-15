import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
// import MyWork from "./MyWork";
// import ContactMe from "./ContactMe";
// import AboutMe from "./AboutMe";
// import Home from "./HomeSection";
// import NotFound from "./NotFound.js";

const NavigationBar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggle = () => {
    setNavActive(!navActive);
  };
  return (
    <>

      <div id='navButton' onClick={() => toggle()}>
        {navActive ? <>&#10005;</> : <>&#9776;</>}
      </div>

  
        {/* {navActive && (
          <nav className="navBar">
            <div className="navLink">
              <Link to="/Home">Home</Link>
            </div>
            <div className="navLink">
              <Link to={"/MyWork"}>My Work</Link>
            </div>
            <div className="navLink">
              <Link to={"/AboutMe"}>About Me</Link>
            </div>
            <div className="navLink">
              <Link to={"/contact"}>Contact Me</Link>
            </div>
          </nav>
        )}
        <Switch>
          <Route path={"/Home"} component={Home} />
          <Route path={"/AboutMe"} component={AboutMe} />
          <Route path={"/MyWork"} component={MyWork} />
          <Route path={"/contact"} component={ContactMe} />
          <Route exact strict path="/" component={Home} />
          <Route
            path={"/saykaren.github.io/saykarenaugsix_deploy/"}
            component={Home}
          />
          <Route
            exact
            strict
            path={"https://saykaren.github.io/"}
            component={Home}
          />
          <Route
            exact
            strict
            path={"https://saykaren.github.io/Home"}
            component={Home}
          />
          <Route
            exact
            strict
            path="/saykaren.github.io/saykarenaugsix_deploy/"
            component={Home}
          />
          <Route
            exact
            strict
            path="/saykaren.github.io/MyWork"
            component={MyWork}
          />
          <Route
            exact
            strict
            path="/saykaren.github.io/portfolio"
            component={Home}
          />
          <Route
            exact
            strict
            path="/saykaren.github.io/AboutMe"
            component={AboutMe}
          />
          <Route
            exact
            strict
            path="/saykaren.github.io/AboutMe"
            component={AboutMe}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router> */}
    </>
  );
};

export default NavigationBar;
