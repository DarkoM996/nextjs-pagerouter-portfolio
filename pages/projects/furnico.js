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

const furnico = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto w-full min-h-screen relative px-6 py-4">
        <FurnicoHero />
        {/* Paragraphs explaining stuff */}
        <div className="max-w-screen-md mx-auto w-full h-full flex flex-col justify-center items-start gap-6 py-16">
          <p className="text-xl leading-normal text-primary_customGray-900 ">
            Days started as a side project back in 2015 when I entered and won a
            design contest. This event sparked the beginning of a new business
            venture and a lasting friendship with Matt Davenport, an iOS
            developer from Manchester, UK. Over the years, we've teamed up on
            various iOS projects, but Days has always remained our primary focus
            and passion. We're committed to constant improvement, iteration,
            and, above all, learning, to ensure our users' satisfaction.
          </p>
          <p className="text-xl leading-normal text-primary_customGray-900  ">
            Days started as a side project back in 2015 when I entered and won a
            design contest. This event sparked the beginning of a new business
            venture and a lasting friendship with Matt Davenport, an iOS
            developer from Manchester, UK. Over the years, we've teamed up on
            various iOS projects, but Days has always remained our primary focus
            and passion. We're committed to constant improvement, iteration,
            and, above all, learning, to ensure our users' satisfaction.
          </p>
          <p className="text-xl leading-normal text-primary_customGray-900  ">
            Days started as a side project back in 2015 when I entered and won a
            design contest. This event sparked the beginning of a new business
            venture and a lasting friendship with Matt Davenport, an iOS
            developer from Manchester, UK. Over the years, we've teamed up on
            various iOS projects, but Days has always remained our primary focus
            and passion. We're committed to constant improvement, iteration,
            and, above all, learning, to ensure our users' satisfaction.
          </p>
        </div>
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
      </div>
    </>
  );
};

export default furnico;
