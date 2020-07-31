import React from "react";
import "./App.css";

// Components
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";

const App = () => {

  return (
    <div className="App">
      <Header />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
