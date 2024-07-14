import React from "react";
import BackToAllProjects from "../components/BackToAllProjects";
import Footer from "../components/Footer";
import TravelLifeHero from "../components/TravelLifeHero";
import TravelLifeImages from "../components/TravelLifeImages";
import TravelLifeText from "../components/TravelLifeText";

const travellife = () => {
  return (
    <>
      <TravelLifeHero />
      <TravelLifeText />
      <TravelLifeImages />
    </>
  );
};

export default travellife;
