import Link from "next/link";
import React from "react";

const AboutSection = () => {
  // In this case h-full does work for some reason
  //this gets me closer to the final design
  return (
    <div className="max-w-screen-md mx-auto w-full h-full relative px-6 py-4">
      <div className="flex flex-col justify-between items-center w-full h-full gap-52 py-16 ">
        {/* Small paragraph section */}
        <div className="flex flex-col justify-center items-start gap-4">
          <p className="text-xl w-full   text-primary_customGray-800">
            I am Darko Mihajlovski, a creative developer and designer based out
            of Kumanovo, North Macedonia. I help companies and brands with
            specific solutions while focusing on taking my work to the next
            level with quality as the main goal.
          </p>
          {/* Link towards the other page */}
          <Link href="/about" className="text-2xl font-semibold items-start">
            More about me
          </Link>
        </div>
        {/* Get in touch section */}
        <div className="flex flex-col justify-center items-start gap-2 w-full h-full">
          <p className="text-base text-primary_customGray-800 w-full h-fit text-left">
            Get in touch
          </p>
          {/* Add a link pointing towards the email */}
          <div className="flex flex-col justify-center items-start w-full h-full">
            <a
              href="/"
              onClick={() =>
                (window.location = "mailto:darko.mihajlovski96@gmail.com")
              }
              className="text-4xl text-pretty text-bold"
            >
              My Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
