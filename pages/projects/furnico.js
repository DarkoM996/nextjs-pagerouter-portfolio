import React from "react";
import Footer from "../components/Footer";
import FurnicoHero from "../components/FurnicoHero";
import FurnicoText from "../components/FurnicoText";
import FurnicoImages from "../components/FurnicoImages";
import BackToAllProjects from "../components/BackToAllProjects";

const furnico = () => {
  return (
    <>
      <FurnicoHero />
      <FurnicoText />
      <FurnicoImages />
      <BackToAllProjects />
      <Footer />
    </>
  );
};

export default furnico;
