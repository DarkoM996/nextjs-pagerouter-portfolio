import Image from "next/image";
import React from "react";
import picture1 from "../../public/images/furniturewebsite-featured-pic-2.5.jpg";
import picture2 from "../../public/images/travel-landing-page-mockup-1.4.jpg";
import picture3 from "../../public/images/sneakerhead-eccomerce-website-featured-picture-2.jpg";
import picture4 from "../../public/images/coffee-bar-concept-version-2.0-volume-2.3.jpg";
import picture5 from "../../public/images/food-order-web-app-featured-mockup.jpg";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <div className="max-w-screen-2xl mx-auto min-h-screen relative px-6 py-4 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24 ">
        {/* Project #1 */}
        <div className="flex flex-col justify-center items-center gap-4 md:mb-40">
          <Link
            href="/projects/furnico"
            className="relative w-full h-[620px] md:h-[720px]"
          >
            <Image
              priority={true}
              fill
              src={picture1}
              alt="picture1"
              className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
            />
          </Link>
          <div className="flex flex-col justify-center items-center p-4 gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              Furnico
            </h4>
            <p className="text-xl font-light text-primary_customGray-700">
              Ecommerce Full Stack Web App
            </p>
          </div>
        </div>
        {/* Project #2 */}
        <div className="flex flex-col justify-center items-center gap-4 md:mb-22">
          <Link
            href="/projects/travellife"
            className="relative w-full h-[620px] md:h-[720px]"
          >
            <Image
              priority={true}
              fill
              src={picture2}
              alt="picture2"
              className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
            />
          </Link>
          <div className="flex flex-col justify-center items-center gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              TravelLife
            </h4>
            <p className="text-xl font-light text-slate-500">
              Travel Landing Page
            </p>
          </div>
        </div>
        {/* Project #3 */}
        <div className="flex flex-col justify-center items-center gap-4 md:mb-36">
          <Link
            href="/projects/sneakerhead"
            className="relative w-full h-[620px] md:h-[720px]"
          >
            <Image
              priority={true}
              fill
              src={picture3}
              alt="picture3"
              className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
            />
          </Link>
          <div className="flex flex-col justify-center items-center gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              SneakerHead
            </h4>
            <p className="text-xl font-light text-primary_customGray-700">
              Sneaker Ecommerce Website
            </p>
          </div>
        </div>
        {/* Project #4 */}
        <div className="flex flex-col justify-center items-center gap-4 md:mb-22">
          <Link
            href="/projects/coffeebar"
            className="relative w-full h-[620px] md:h-[720px]"
          >
            <Image
              priority={true}
              fill
              src={picture4}
              alt="picture4"
              className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
            />
          </Link>
          <Link
            href="/projects/coffeebar"
            className="flex flex-col justify-center items-center gap-2"
          >
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              CoffeeBar
            </h4>
            <p className="text-xl font-light text-primary_customGray-700">
              Coffee Bar Website
            </p>
          </Link>
        </div>
        {/* Project #5 */}
        <div className="flex flex-col justify-center items-center gap-4 md:mb-32">
          <Link
            href="/projects/thetomato"
            className="relative w-full h-[620px] md:h-[720px]"
          >
            <Image
              priority={true}
              fill
              src={picture5}
              alt="picture5"
              className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
            />
          </Link>
          <div className="flex flex-col justify-center items-center gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
              The Tomato
            </h4>
            <p className="text-xl font-light text-slate-600">
              Web App Dashboard
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
//       className="w-[420px] h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
//     />
//   </div>
//   <div className="flex flex-col justify-center items-center gap-2">
//     <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
//       CoffeeBar
//     </h4>
//     <p className="text-base text-primary_customGray-700">
//       Coffee Bar Website
//     </p>
//   </div>
// </div>

// Working Project Section With Grid Columns

{
  /* <div className=" max-w-screen-2xl mx-auto h-[2300px] relative px-6 py-4">
{/* Grid  */
}
// {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full">
//   {/* Grid Item */}
//   <div className="flex flex-col justify-center items-center gap-4">
//     <Link href="/projects/furniturewebsite" className="relative h-[620px]">
//       <Image
//         src={picture1}
//         alt="picture1"
//         className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
//       />
//     </Link>
//     <div className="flex flex-col justify-center items-center gap-2">
//       <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
//         CoffeeBar
//       </h4>
//       <p className="text-base text-primary_backgroundDarkerColor-600">
//         Coffee Bar Website
//       </p>
//     </div>
//   </div>
//   {/* Grid Item */}
//   <div className="flex flex-col justify-center items-center gap-4">
//     <div className="relative h-[620px]">
//       <Image
//         src={picture2}
//         alt="picture1"
//         className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
//       />
//     </div>
//     <div className="flex flex-col justify-center items-center gap-2">
//       <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
//         CoffeeBar
//       </h4>
//       <p className="text-base text-primary_backgroundDarkerColor-600">
//         Coffee Bar Website
//       </p>
//     </div>
//   </div>
//   {/* Grid Item */}
//   <div className="flex flex-col justify-center items-center gap-4">
//     <div className="relative h-[620px]">
//       <Image
//         src={picture3}
//         alt="picture1"
//         className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
//       />
//     </div>
//     <div className="flex flex-col justify-center items-center gap-2">
//       <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
//         CoffeeBar
//       </h4>
//       <p className="text-base text-primary_backgroundDarkerColor-600">
//         Coffee Bar Website
//       </p>
//     </div>
//   </div>
//   {/* Grid Item */}
//   <div className="flex flex-col justify-center items-center gap-4">
//     <div className="relative h-[620px]">
//       <Image
//         src={picture4}
//         alt="picture1"
//         className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
//       />
//     </div>
//     <div className="flex flex-col justify-center items-center gap-2">
//       <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
//         CoffeeBar
//       </h4>
//       <p className="text-base text-primary_backgroundDarkerColor-600">
//         Coffee Bar Website
//       </p>
//     </div>
//   </div>
//   {/* Grid Item */}
//   <div className="flex flex-col justify-center items-center gap-4">
//     <div className="relative h-[720px]">
//       <Image
//         src={picture5}
//         alt="picture1"
//         className="w-full h-full object-cover rounded-3xl hover:scale-90  duration-500 transition-transform"
//       />
//     </div>
//     <div className="flex flex-col justify-center items-center gap-2">
//       <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-800">
//         CoffeeBar
//       </h4>
//       <p className="text-base text-primary_backgroundDarkerColor-600">
//         Coffee Bar Website
//       </p>
//     </div>
//   </div>
// </div>; */}
