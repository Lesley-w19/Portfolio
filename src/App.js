import React from "react";
import "./App.css";
import Footer from "./layouts/footer";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Resume from "./components/resume";
import Portfolio from "./components/gallery";
import Experience from "./components/experience";

const App = () => {
  return (
    <React.Fragment>
      <Home />
      <About />
      <Experience />
      <Resume />
      <Portfolio />
      <Contact />
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default App;
