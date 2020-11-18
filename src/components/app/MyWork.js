import React from "react";
import freeCodeCamp from "../assets/Karen_freeCodeCamp_Certificate_Responsive_Web_Design_2.13.2019.png";
import ReactWebsite from "../assets/React_Website_ES6_8.1.2019.png";
import NumberGif from "../assets/Number_Guesser.gif";
import Bomdigity from "../assets/Bomdigity.gif";
import flashcard from "../assets/flashcard-starter.gif";
import check from "../assets/checkwritting.png";
import GitFitter from "../assets/GitFitter.gif";
import businessFinancial from "../assets/businessFinancial.png";
import ColorsRedux from "../assets/ColorsRedux_10.2019.gif";
import FIRE from "../assets/FIRE.png";
import AddressBook from "../assets/AddressBookPic.png";

import MortgageBeGone from "../assets/MortgageBeGone.jpeg";
import SinkingFund from "../assets/SinkingFundJpeg.jpeg";
import Recipe from "../assets/Recipe.jpeg";
import WorkContainer from "./WorkContainer";

const MyWork = () => (
  <div>
    <h1 id="myWork">Work Examples</h1>
    <main id="workContainer">
      <WorkContainer
        source={Recipe}
        altString="Recipe Box"
        workName="sayKaren's Recipe Box"
        demonstratesWork={"React, TypeScript, SCSS and Modal"}
        codeLink="https://github.com/saykaren/sayKarenRecipes"
        liveLink="https://saykaren.github.io/sayKarenRecipes/"
      />
      <WorkContainer
        source={SinkingFund}
        altString="SinkingFund"
        workName="Sinking Fund"
        demonstratesWork={"React, TypeScript, SCSS and Modal"}
        codeLink="https://github.com/saykaren/SinkingFund"
        liveLink="https://saykaren.github.io/SinkingFund/"
      />
      <WorkContainer
        source={MortgageBeGone}
        altString="Mortgage Be Gone"
        workName="Mortgage Be Gone"
        demonstratesWork={"React, TypeScript, SCSS and Modal"}
        codeLink="https://github.com/saykaren/MortgageBeGone"
        liveLink="https://saykaren.github.io/MortgageBeGone/"
      />
      <WorkContainer
        source={AddressBook}
        altString="AddressBook"
        workName="AddressBook"
        demonstratesWork={`React, TypeScript, Jest, Enzyme, SCSS, Fetch API and Modal`}
        codeLink="https://github.com/saykaren/AddressBook"
        liveLink="https://saykaren.github.io/AddressBook"
      />
      <WorkContainer
        source={ColorsRedux}
        altString="ColorsRedux"
        workName="ColorsRedux"
        demonstratesWork={` Redux (useSelector() and useDispatch()), React, Hooks, JavaScript, and CSS`}
        codeLink="https://github.com/saykaren/ColorsRedux"
        liveLink="https://saykaren.github.io/ColorsReduxDeploy/"
      />
      <WorkContainer
        source={GitFitter}
        altString="GitFitter"
        workName="GitFitter"
        demonstratesWork={`SASS / React / Hooks`}
        codeLink="https://github.com/saykaren/GetFitter"
        liveLink="https://saykaren.github.io/GitFitter_DeployedSite/"
      />
      <WorkContainer
        source={NumberGif}
        altString="Number gif"
        workName="Number Guesser"
        demonstratesWork={`Vanilla JavaScript skills`}
        codeLink="https://github.com/saykaren/Number_Guesser"
        liveLink="https://saykaren.github.io/Number_Guesser/"
      />

      <WorkContainer
        source={Bomdigity}
        altString="Bomdigity"
        workName="Bomdigity Testing"
        demonstratesWork={`Testing skills with JavaScript framework Mocha and Chai`}
        codeLink="https://github.com/saykaren/Bomdigity_Testing"
        liveLink="https://github.com/saykaren/Bomdigity_Testing"
      />
      <WorkContainer
        source={flashcard}
        altString="Flashcard gif"
        workName="Flashcards-Starter"
        demonstratesWork={`JavaScript Classes and Object-oriented Programming (OOP). Live: Clone repo and in command line use node index.js to start game `}
        codeLink="https://github.com/saykaren/flashcards-starter"
        liveLink="https://github.com/saykaren/flashcards-starter"
      />
      <WorkContainer
        source={businessFinancial}
        altString="Business Financial Analysis"
        workName="Business Financial Analysis"
        demonstratesWork={`React / Hooks / SASS`}
        codeLink="https://github.com/saykaren/FinancialAnalysis"
        liveLink="https://saykaren.github.io/BusinessFinancialAnalysis/"
      />

      <WorkContainer
        source={check}
        altString="Check writting"
        workName="Check Conversion"
        demonstratesWork={`Vanilla Javascript and ES6 Skills`}
        codeLink="https://github.com/saykaren/CheckWriting7.26.2019"
        liveLink="https://saykaren.github.io/CheckWriting7.26.2019/"
      />
      {/* <WorkContainer
        source={}
        altString=""
        workName=""
        demonstratesWork={``}
        codeLink=""
        liveLink=""
      /> */}
      <section className="workPortfolio">
        <section className="front">
          <a
            href="https://www.freecodecamp.org/certification/saykaren/responsive-web-design"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails front"
            id="freeCodeCamp"
          >
            <img
              src={freeCodeCamp}
              className="workImg front"
              alt="freeCodeCamp Certificate"
            />
          </a>
        </section>
        <section className="back">
          <span className="strong">Certificate</span>
          <span className="workDetails">
            freeCodeCamp Responsive Web Design Certificate
          </span>
        </section>
      </section>
    </main>
  </div>
);

export default MyWork;
