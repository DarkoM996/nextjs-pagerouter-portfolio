import React from "react";
import AboutHero from "./components/AboutHero";
import AboutText from "./components/AboutText";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const about = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutText />
      <CTA />
      <Footer />
    </>
  );
};

export default about;
