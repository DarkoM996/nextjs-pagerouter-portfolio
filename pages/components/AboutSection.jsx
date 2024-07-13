import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full min-h-screen relative px-6 py-4">
      <div className="flex flex-col justify-between items-center w-full h-full gap-48">
        {/* Small paragraph section */}
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-xl w-full md:w-1/2 text-primary_customGray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rerum
            totam suscipit pariatur velit, repudiandae ipsam laboriosam facere
            adipisci quae dolore facilis quas ratione ad, optio autem nostrum
            amet ex!
          </p>
          {/* Link towards the other page */}
          <Link href="/about" className="text-2xl font-semibold">
            More about me
          </Link>
        </div>
        {/* Get in touch section */}
        <div className="flex flex-col justify-center items-center gap-2 w-full h-full">
          <p className="text-base text-primary_customGray-800 w-full h-fit text-center">
            Get in touch
          </p>
          {/* Add a link pointing towards the email */}
          <div className="flex flex-col justify-center items-center w-full h-full">
            <h2 className="text-4xl text-pretty">My Email</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
