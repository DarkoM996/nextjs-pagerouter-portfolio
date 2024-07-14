import React from "react";
import BackToAllProjects from "../components/BackToAllProjects";
import SneakerHeadHero from "../components/SneakerHeadHero";
import SneakerHeadImages from "../components/SneakerHeadImages";
import SneakerHeadText from "../components/SneakerHeadText";

const sneakerhead = () => {
  return (
    <>
      <SneakerHeadHero />
      <SneakerHeadText />
      <SneakerHeadImages />
      <BackToAllProjects />
    </>
  );
};

export default sneakerhead;
