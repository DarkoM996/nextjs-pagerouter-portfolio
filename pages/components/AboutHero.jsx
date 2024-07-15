import React from "react";

const AboutHero = () => {
  return (
    // In this case h-full is used so the space between the sections is what I needed per design requirements
    <div className="max-w-screen-md mx-auto w-full h-full relative px-6 py-6">
      <div className="flex flex-col justify-center items-start gap-6 lg:gap-16 lg:pt-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">
          Creative Designer and Developer working on user-center innovation and
          product evolution
        </h1>
      </div>
    </div>
  );
};

export default AboutHero;
