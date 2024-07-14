import React from "react";

const CoffeeBarHero = () => {
  return (
    <div className="max-w-screen-md mx-auto w-full h-full relative px-6 py-4">
      <div className="flex flex-col justify-center items-start gap-6 lg:gap-16 lg:pt-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          CoffeeBar
        </h1>
        <h3 className="text-2xl md:text-3xl font-medium text-primary_backgroundDarkerColor-600">
          Established in 2011, InVision has become the leading digital product
          design platform, driving exceptional user experiences globally. With
          comprehensive tools spanning ideation, design, prototyping, and
          management, InVision empowered over 5 million individuals to create
          and collaborate efficiently.
        </h3>
      </div>
    </div>
  );
};

export default CoffeeBarHero;
