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
    <div className="max-w-screen-xl mx-auto w-full h-full flex flex-col justify-center items-center gap-8 relative px-6 py-4">
      {/* Grid */}
      <div className="grid grid-cols-1 w- gap-6">
        {/* Image #1 */}
        <div className="relative w-full h-[520px] md:h-[720px] py-12 ">
          <Image
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
            quality={100}
            src={picture1}
            alt="/"
            className="object-cover w-full h-full rounded-3xl bg-center"
          />
        </div>
        {/* Image #2 */}
        <div className="relative w-full h-[520px] md:h-[720px] py-4 ">
          <Image
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            loading="eager"
            src={picture2}
            alt="/"
            className="object-cover w-full h-full rounded-3xl bg-center"
          />
        </div>
        {/* Image #3 */}
        <div className="relative w-full h-[520px] md:h-[720px] py-4 ">
          <Image
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
            quality={100}
            src={picture3}
            alt="/"
            className="object-cover w-full h-[500px] rounded-3xl bg-center"
          />
        </div>
        {/* Image #4 */}
        <div className="grid grid-cols-1 gap-6">
          <div className="relative w-full h-[520px] md:h-[720px] py-4 ">
            <Image
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
              src={picture4}
              quality={100}
              alt="/"
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>
          {/* Image #5 */}
          <div className="relative w-full h-[520px] md:h-[720px] py-4 ">
            <Image
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
              quality={100}
              src={picture5}
              alt="/"
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>
        </div>
        {/* Image #6 */}
        <div className="relative w-full h-[520px] md:h-[720px] py-4 ">
          <Image
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
            quality={100}
            src={picture6}
            alt="/"
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
        {/* Image #7 */}
        <div className="relative w-full h-[520px] md:h-[720px] py-4 ">
          <Image
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
            quality={100}
            src={picture7}
            alt="/"
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SneakerHeadImages;
