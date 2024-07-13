import Image from "next/image";
import React from "react";
import backgroundimg from "../../public/images/coffee-bar-concept-version-2.0-volume-2.3.jpg";
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  DiHtml5,
  DiCss3,
  DiPhotoshop,
  DiIllustrator,
  DiReact,
} from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiFigma } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiReact,
  SiCss3,
  SiHtml5,
  SiFigma,
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const AboutText = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full min-h-screen relative px-6 py-4">
      {/* Paragraphs that give explanations */}
      <div className="max-w-screen-md mx-auto w-full h-full flex flex-col justify-center items-center gap-8">
        <p className="text-xl text-black font-light ">
          I am Darko Mihajlovski, a creative developer and designer based out of
          Kumanovo, North Macedonia. I help companies and brands with specific
          solutions while focusing on taking my work to the next level with
          quality as the main goal.
        </p>
        <p className="text-xl text-black font-light ">
          I build websites and web apps that focus on clean and minimalistic
          design. My focus is on clean and minimalistic design with focus on
          well placed animations, transitions as well as interaction.
        </p>
        <p className="text-xl text-black font-light ">
          From marketing websites that inspire, to e-commerce that convinces and
          web apps that are truly beneficial. All while focusing on clean and
          minimalistic design to deliver use friendly designs for the web.
        </p>
        <p className="text-xl text-black font-light ">
          With my knowledge as a digital designer, I make sure that a visual
          identity can be used throughout all digital touchpoints in an
          accessible and user-friendly way. I build scalable websites from
          scratch that fit seamlessly with design. My focus is on clean and
          minimalistic design with carefully placed animations as well as
          transitions
        </p>
      </div>
      {/* Image that can be changed  */}
      <div className="relative py-24">
        <Image
          src={backgroundimg}
          alt="/"
          className="object-cover rounded-2xl"
        />
      </div>
      {/* Section about technologies used with icons from react icons */}
      <div className="max-w-screen-md mx-auto w-full h-full relative px-6 py-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-24">
          Technologies I use within my work
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-4xl text-center">
          <SiHtml5 />
          <SiCss3 />
          <SiAdobeillustrator />
          <SiAdobephotoshop />
          <SiFigma />
          <SiReact />
          <SiNextdotjs />
          <TbBrandFramerMotion />
          <SiJavascript />
          <SiTailwindcss />
          <FaGithub />
          <SiAdobexd />
        </div>
      </div>
    </div>
  );
};

export default AboutText;
