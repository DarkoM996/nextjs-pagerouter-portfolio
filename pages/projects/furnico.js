import React from "react";
import Navbar from "../components/Navbar";

const furnico = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-md mx-auto w-full min-h-screen relative px-6 py-4">
        {/* Hero Section */}
        <div className="flex flex-col justify-center items-start gap-6 md:gap-10 lg:gap-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Furnico Web App
          </h1>
          <h3 className="text-2xl md:text-3xl font-medium text-primary_backgroundDarkerColor-600">
            Days is a beautiful countdown app to all the events that matter to
            you. Events are important, they're the small things in life that
            matter the most. Whether it's a wedding, a holiday or just a night
            out with your friends.
          </h3>
        </div>
        {/* Paragraphs explaining stuff */}
        <div className="flex flex-col justify-center items-start gap-6 py-16">
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
      </div>
    </>
  );
};

export default furnico;
