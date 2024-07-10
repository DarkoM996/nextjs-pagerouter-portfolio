import Image from "next/image";
import React from "react";
import picture1 from "../../public/images/furniturewebsite-featured-pic-2.5.jpg";
import picture2 from "../../public/images/travel-landing-page-mockup-1.4.jpg";
import picture3 from "../../public/images/sneakerhead-eccomerce-website-featured-picture.jpg";
import picture4 from "../../public/images/coffee-bar-concept-version-2.0-volume-2.3.jpg";
import picture5 from "../../public/images/food-order-web-app-featured-mockup.jpg";

const ProjectSection = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-screen relative px-6 py-4">
      {/* Grid  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Grid Item */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="relative h-[620px]">
            <Image
              src={picture1}
              alt="picture1"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              CoffeeBar
            </h4>
            <p className="text-base text-primary_backgroundDarkerColor-600">
              Coffee Bar Website
            </p>
          </div>
        </div>
        {/* Grid Item */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="relative h-[620px]">
            <Image
              src={picture2}
              alt="picture1"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              CoffeeBar
            </h4>
            <p className="text-base text-primary_backgroundDarkerColor-600">
              Coffee Bar Website
            </p>
          </div>
        </div>
        {/* Grid Item */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="relative h-[620px]">
            <Image
              src={picture3}
              alt="picture1"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              CoffeeBar
            </h4>
            <p className="text-base text-primary_backgroundDarkerColor-600">
              Coffee Bar Website
            </p>
          </div>
        </div>
        {/* Grid Item */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="relative h-[620px]">
            <Image
              src={picture4}
              alt="picture1"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              CoffeeBar
            </h4>
            <p className="text-base text-primary_backgroundDarkerColor-600">
              Coffee Bar Website
            </p>
          </div>
        </div>
        {/* Grid Item */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="relative h-[720px]">
            <Image
              src={picture5}
              alt="picture1"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              CoffeeBar
            </h4>
            <p className="text-base text-primary_backgroundDarkerColor-600">
              Coffee Bar Website
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

// Working

//   {/* Project Item */}
//   <div className="flex flex-col justify-center items-center gap-4">
//   <div className="relative h-[620px]">
//     <Image
//       src={picture1}
//       alt="picture1"
//       className="w-[420px] h-full object-cover rounded-3xl"
//     />
//   </div>
//   <div className="flex flex-col justify-center items-center gap-2">
//     <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
//       CoffeeBar
//     </h4>
//     <p className="text-base text-primary_backgroundDarkerColor-600">
//       Coffee Bar Website
//     </p>
//   </div>
// </div>
