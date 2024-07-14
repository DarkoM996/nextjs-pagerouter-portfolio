import React from "react";
import BackToAllProjects from "../components/BackToAllProjects";
import CoffeeBarHero from "../components/CoffeeBarHero";
import CoffeeBarImages from "../components/CoffeeBarImages";
import CoffeeBarText from "../components/CoffeeBarText";

const coffeebar = () => {
  return (
    <>
      <CoffeeBarHero />
      <CoffeeBarText />
      <CoffeeBarImages />
      <BackToAllProjects />
    </>
  );
};

export default coffeebar;
