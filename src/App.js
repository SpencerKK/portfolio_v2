import React from "react";
import "./App.css";

// Components
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from './Components/Contact/Contact';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
