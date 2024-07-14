import React from "react";
import picture1 from "../../public/images/furniturewebsite-featured-pic-1.2.jpg";
import picture2 from "../../public/images/furniturewebsite-featured-pic-1.3.jpg";
import picture3 from "../../public/images/furniturewebsite-featured-pic-1.4.jpg";
import picture4 from "../../public/images/furniturewebsite-featured-pic-1.5.jpg";
import picture5 from "../../public/images/furniturewebsite-featured-pic-1.6.jpg";
import picture6 from "../../public/images/furniturewebsite-featured-pic-1.7.jpg";
import picture7 from "../../public/images/furniturewebsite-featured-pic-2.5.jpg";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import FurnicoHero from "../components/FurnicoHero";
import FurnicoText from "../components/FurnicoText";
import FurnicoImages from "../components/FurnicoImages";

const furnico = () => {
  return (
    <>
      <FurnicoHero />
      <FurnicoText />
      <FurnicoImages />

      <Footer />
    </>
  );
};

export default furnico;
