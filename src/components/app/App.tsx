import React, { useState } from "react";
import "../styling/App.scss";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import NavigationBar from "./Navigation";
// import Container from './Container';

const App = () => {

  const [activeItem, setActiveItem] = useState("Home");
  const [navActive, setNavActive] = useState<boolean>(false);

  const toggleNavMenu = () => {
    setNavActive(!navActive);
  };

  const toggleActive = (item: string) =>{
      setActiveItem(item);
      setNavActive(false);
  }
  return (
    <div className='App'>
      <NavigationBar toggleActive={toggleActive} navActive={navActive} toggleNavMenu={toggleNavMenu}/>
      <LandingPage activeItem={activeItem}/>
      <Footer />
    </div>
  );
};

export default App;
