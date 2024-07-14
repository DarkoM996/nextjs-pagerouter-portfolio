import React from "react";
import Navbar from "../components/Navbar";
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

const furnico = () => {
  return (
    <>
      <FurnicoHero />
      <FurnicoText />
      {/* Image #1 */}
      <div className="relative w-full h-screen py-12 ">
        <Image
          priority={true}
          src={picture1}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
      {/* Image #2 */}
      <div className="relative w-full h-screen py-4 ">
        <Image
          priority={true}
          src={picture2}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
      {/* Image #3 */}
      <div className="relative w-full h-screen py-4 ">
        <Image
          priority={true}
          src={picture3}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
      {/* Image #4 */}
      <div className="grid grid-cols-2 gap-6">
        <div className="relative w-full h-screen py-4 ">
          <Image
            priority={true}
            src={picture4}
            alt="/"
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
        {/* Image #5 */}
        <div className="relative w-full h-screen py-4 ">
          <Image
            priority={true}
            src={picture5}
            alt="/"
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
      </div>
      {/* Image #6 */}
      <div className="relative w-full h-screen py-4 ">
        <Image
          priority={true}
          src={picture6}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
      {/* Image #7 */}
      <div className="relative w-full h-screen py-4 ">
        <Image
          priority={true}
          src={picture7}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
      {/* Back To All Projects */}
      <div className="flex flex-col justify-center items-center w-full h-[600px]">
        <Link
          href="/"
          className="text-3xl md:text-4xl  font-semibold hover:underline"
        >
          Back To Projects
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default furnico;
