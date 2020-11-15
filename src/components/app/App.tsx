import React from "react";
import "../styling/App.scss";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import NavigationBar from "./Navigation";
// import Container from './Container';

const App = () => {
  return (
    <>
      <NavigationBar />
      <LandingPage/>
      <Footer />
      Hello
      <div className="App">Hello</div>
    </>
  );
};

export default App;
