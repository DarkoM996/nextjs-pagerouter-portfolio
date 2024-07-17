import React from "react";
import picture1 from "../../public/images/sneakerhead-eccomerce-website-featured-picture-2.jpg";
import picture2 from "../../public/images/sneakerhead-eccomerce-website-featured-picture-7.jpg";
import picture3 from "../../public/images/sneakerhead-eccomerce-website-featured-picture-3.jpg";
import picture4 from "../../public/images/sneakerhead-eccomerce-website-featured-picture-10.jpg";
import picture5 from "../../public/images/sneakerhead-eccomerce-website-featured-picture-5.jpg";
import picture6 from "../../public/images/sneakerhead-eccomerce-website-featured-picture-6.jpg";
import picture7 from "../../public/images/sneakerhead-eccomerce-website-featured-picture-2.jpg";
import Image from "next/image";

const SneakerHeadImages = ({ priority }) => {
  return (
    <div className="max-w-screen-xl mx-auto w-full h-full flex flex-col justify-center items-center gap-8 relative px-6 py-4">
      {/* Grid */}
      <div className="grid grid-cols-1 w- gap-6">
        {/* Image #1 */}
        <div className="relative w-full h-[520px] md:h-[720px] py-12 ">
          <Image
            priority={!!priority}
            src={picture1}
            width={1223}
            height={624}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={picture1}
            className="object-cover w-full h-full rounded-3xl bg-center"
          />
        </div>
        {/* Image #2 */}
        <div className="relative w-full h-[520px] md:h-[720px] py-4 ">
          <Image
            priority={!!priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={picture2}
            alt={picture2}
            className="object-cover w-full h-full rounded-3xl bg-center"
          />
        </div>
        {/* Image #3 */}
        <div className="relative w-full h-[520px] md:h-[720px] py-4 ">
          <Image
            priority={!!priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={picture3}
            alt={picture3}
            className="object-cover w-full h-[500px] rounded-3xl bg-center"
          />
        </div>
        {/* Image #4 */}
        <div className="grid grid-cols-1 gap-6">
          <div className="relative w-full h-[520px] md:h-[720px] py-4 ">
            <Image
              priority={!!priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={picture4}
              quality={100}
              alt={picture4}
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>
          {/* Image #5 */}
          <div className="relative w-full h-[520px] md:h-[720px] py-4 ">
            <Image
              priority={!!priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={picture5}
              alt={picture5}
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>
        </div>
        {/* Image #6 */}
        <div className="relative w-full h-[520px] md:h-[720px] py-4 ">
          <Image
            priority={!!priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={picture6}
            alt={picture6}
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
        {/* Image #7 */}
        <div className="relative w-full h-[520px] md:h-[720px] py-4 ">
          <Image
            priority={!!priority}
            src={picture7}
            alt={picture7}
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SneakerHeadImages;
