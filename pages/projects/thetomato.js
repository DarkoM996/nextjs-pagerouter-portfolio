import React from "react";
import BackToAllProjects from "../components/BackToAllProjects";
import Footer from "../components/Footer";
import TheTomatoImages from "../components/TheTomatoImages";
import TheTomatoText from "../components/TheTomatoText";
import TheTomatoHero from "./../components/TheTomatoHero";

const thetomato = () => {
  return (
    <>
      <TheTomatoHero />
      <TheTomatoText />
      <TheTomatoImages />
      <BackToAllProjects />
      <Footer />
    </>
  );
};

export default thetomato;
