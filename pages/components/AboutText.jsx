import Image from "next/image";
import React from "react";
import backgroundimg from "../../public/images/coffee-bar-concept-version-2.0-volume-2.3.jpg";

const AboutText = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full min-h-screen relative px-6 py-4">
      {/* Paragraphs that give explanations */}
      <div className="max-w-screen-md mx-auto w-full h-full flex flex-col justify-center items-center gap-8">
        <p className="text-xl text-black font-light ">
          I am Darko Mihajlovski, a creative developer and designer based out of
          Kumanovo, North Macedonia. I help companies and brands create
          beautiful and timeless expressions for the web while pushing for ever
          increasing quality of work.
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
      <div className="relative w-full h-screen py-24">
        <Image
          src={backgroundimg}
          alt="/"
          className="object-cover rounded-2xl w-full h-full"
        />
      </div>
      {/* Section about technologies used with icons from react icons */}
      <div className="max-w-screen-md mx-auto w-full h-full relative px-6 py-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl py-16">
          Technologies I use within my work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xl text-primary_customGray-700">
          <p>End-to-end Product Design</p>
          <p>User Experience Design</p>
          <p>Motion Design</p>
          <p>Consulting</p>
          <p>Interface Design</p>
          <p>Interaction Design</p>
          <p>Design Systems</p>
          <p>Front-End</p>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
