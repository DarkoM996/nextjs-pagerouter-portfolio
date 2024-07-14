import React from "react";
import BackToAllProjects from "../components/BackToAllProjects";
import CoffeeBarHero from "../components/CoffeeBarHero";
import CoffeeBarImages from "../components/CoffeeBarImages";
import CoffeeBarText from "../components/CoffeeBarText";
import Footer from "../components/Footer";

const coffeebar = () => {
  return (
    <>
      <CoffeeBarHero />
      <CoffeeBarText />
      <CoffeeBarImages />
      <BackToAllProjects />
      <Footer />
    </>
  );
};

export default coffeebar;
