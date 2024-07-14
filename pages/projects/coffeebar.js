import React from "react";
import CoffeeBarHero from "../components/CoffeeBarHero";
import CoffeeBarImages from "../components/CoffeeBarImages";
import CoffeeBarText from "../components/CoffeeBarText";

const coffeebar = () => {
  return (
    <>
      <CoffeeBarHero />
      <CoffeeBarText />
      <CoffeeBarImages />
    </>
  );
};

export default coffeebar;
