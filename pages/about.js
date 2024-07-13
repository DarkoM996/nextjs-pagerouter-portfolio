import React from "react";
import AboutHero from "./components/AboutHero";
import AboutText from "./components/AboutText";
import Navbar from "./components/Navbar";

const about = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutText />
    </>
  );
};

export default about;
