import React from "react";

const AboutText = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full min-h-screen relative px-6 py-4">
      {/* Paragraphs that give explanations */}
      <div className="max-w-screen-md mx-auto w-full h-full flex flex-col justify-center items-center gap-8">
        <p className="text-xl">
          I am Darko Mihajlovski, a creative developer and designer based out of
          Kumanovo, North Macedonia. I help companies and brands with specific
          solutions while focusing on taking my work to the next level with
          quality as the main goal.
        </p>
        <p className="text-xl">
          I build websites and web apps that focus on clean and minimalistic
          design. My focus is on clean and minimalistic design with focus on
          well placed animations, transitions as well as interaction.
        </p>
        <p className="text-xl">
          From marketing websites that inspire, to e-commerce that convinces and
          web apps that are truly beneficial. All while focusing on clean and
          minimalistic design to deliver use friendly designs for the web.
        </p>
        <p className="text-xl">
          With my knowledge as a digital designer, I make sure that a visual
          identity can be used throughout all digital touchpoints in an
          accessible and user-friendly way. I build scalable websites from
          scratch that fit seamlessly with design. My focus is on clean and
          minimalistic design with carefully placed animations as well as
          transitions
        </p>
      </div>
    </div>
  );
};

export default AboutText;
