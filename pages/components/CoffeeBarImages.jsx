import React from "react";
import picture1 from "../../public/images/coffee-bar-concept-version-2.0-volume-2.3.jpg";
import picture2 from "../../public/images/coffee-bar-concept-version-2.0-volume-1.8.jpg";
import picture3 from "../../public/images/coffee-bar-concept-version-2.0-volume-1.9.jpg";
import picture4 from "../../public/images/coffee-bar-concept-version-2.0-volume-2.0.jpg";
import picture5 from "../../public/images/coffee-bar-concept-version-2.0-volume-2.1.jpg";
import picture6 from "../../public/images/coffee-bar-concept-version-2.0-volume-2.4.jpg";
import picture7 from "../../public/images/coffee-bar-concept-version-2.0-volume-1.5.jpg";
import Image from "next/image";

const CoffeeBarImages = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full h-full flex flex-col justify-center items-center gap-4 relative px-6 py-4">
      {/* Image #1 */}
      <div className="relative w-full  h-[520px] md:h-[720px] py-12 ">
        <Image
          priority={true}
          src={picture1}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
      {/* Image #2 */}
      <div className="relative w-full  h-[520px] md:h-[720px] py-4 ">
        <Image
          priority={true}
          src={picture2}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
      {/* Image #3 */}
      <div className="relative w-full  h-[520px] md:h-[720px] py-4 ">
        <Image
          priority={true}
          src={picture3}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
      {/* Image #4 */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
        <div className="relative w-full h-screen py-4 ">
          <Image
            priority={true}
            src={picture4}
            alt="/"
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
        {/* Image #5 */}
        <div className="relative w-full h-screen py-4 ">
          <Image
            priority={true}
            src={picture5}
            alt="/"
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
      </div>
      {/* Image #6 */}
      <div className="relative w-full  h-[520px] md:h-[720px] py-4 ">
        <Image
          priority={true}
          src={picture6}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
      {/* Image #7 */}
      <div className="relative w-full h-[520px] md:h-[720px] py-4 ">
        <Image
          priority={true}
          src={picture7}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
    </div>
  );
};

export default CoffeeBarImages;
