import React from "react";
import picture1 from "../../public/images/sneakerhead-eccomerce-website-featured-picture-2.jpg";
import picture2 from "../../public/images/sneakerhead-eccomerce-website-featured-picture-7.jpg";
import picture3 from "../../public/images/sneakerhead-eccomerce-website-featured-picture-3.jpg";
import picture4 from "../../public/images/sneakerhead-eccomerce-website-featured-picture-10.jpg";
import picture5 from "../../public/images/sneakerhead-eccomerce-website-featured-picture-5.jpg";
import picture6 from "../../public/images/sneakerhead-eccomerce-website-featured-picture-6.jpg";
import picture7 from "../../public/images/sneakerhead-eccomerce-website-featured-picture-2.jpg";
import Image from "next/image";

const SneakerHeadImages = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full h-full relative px-6 py-4">
      {/* Image #1 */}
      <div className="relative w-full h-screen py-12 ">
        <Image
          priority
          width={700}
          height={700}
          src={picture1}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
      {/* Image #2 */}
      <div className="relative w-full h-screen py-4 ">
        <Image
          priority
          width={700}
          height={700}
          src={picture2}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
      {/* Image #3 */}
      <div className="relative w-full h-screen py-4 ">
        <Image
          priority
          width={700}
          height={700}
          src={picture3}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
      {/* Image #4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative w-full h-screen py-4 ">
          <Image
            priority
            width={700}
            height={700}
            src={picture4}
            alt="/"
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
        {/* Image #5 */}
        <div className="relative w-full h-screen py-4 ">
          <Image
            priority
            width={700}
            height={700}
            src={picture5}
            alt="/"
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
      </div>
      {/* Image #6 */}
      <div className="relative w-full h-screen py-4 ">
        <Image
          priority
          width={700}
          height={700}
          src={picture6}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
      {/* Image #7 */}
      <div className="relative w-full h-screen py-4 ">
        <Image
          priority
          width={700}
          height={700}
          src={picture7}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
    </div>
  );
};

export default SneakerHeadImages;
