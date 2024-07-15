import React from "react";
import Image from "next/image";
import picture1 from "../../public/images/furniturewebsite-featured-pic-2.5.jpg";
import picture2 from "../../public/images/furniturewebsite-featured-pic-1.2.jpg";
import picture3 from "../../public/images/furniturewebsite-featured-pic-1.4.jpg";
import picture4 from "../../public/images/furniturewebsite-featured-pic-1.6.jpg";
import picture5 from "../../public/images/furniturewebsite-featured-pic-1.9.jpg";
import picture6 from "../../public/images/furniturewebsite-featured-pic-2.0.jpg";
import picture7 from "../../public/images/furniturewebsite-featured-pic-2.5.jpg";

const FurnicoImages = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full min-h-screen relative px-6 py-4">
      <div className="relative w-full h-4/5 py-12 ">
        <Image
          priority
          src={picture1}
          width={700}
          height={700}
          alt="/"
          className="object-cover w-full  h-[600px] rounded-3xl"
        />
      </div>
      {/* Image #2 */}
      <div className="relative w-full h-4/5 py-4 ">
        <Image
          priority
          width={700}
          height={700}
          src={picture2}
          alt="/"
          className="object-cover w-full  h-[600px] rounded-3xl"
        />
      </div>
      {/* Image #3 */}
      <div className="relative w-full h-4/5 py-4 ">
        <Image
          priority
          width={700}
          height={700}
          src={picture3}
          alt="/"
          className="object-cover w-full  h-[600px] rounded-3xl"
        />
      </div>
      {/* Image #4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative w-full h-4/5 py-4 ">
          <Image
            priority
            width={700}
            height={700}
            src={picture4}
            alt="/"
            className="object-cover w-full  h-[600px] rounded-3xl"
          />
        </div>
        {/* Image #5 */}
        <div className="relative w-full h-4/5 py-4 ">
          <Image
            priority
            width={700}
            height={700}
            src={picture5}
            alt="/"
            className="object-cover w-full  h-[600px] rounded-3xl"
          />
        </div>
      </div>
      {/* Image #6 */}
      <div className="relative w-full h-4/5 py-4 ">
        <Image
          priority
          width={700}
          height={700}
          src={picture6}
          alt="/"
          className="object-cover w-full  h-[600px] rounded-3xl"
        />
      </div>
      {/* Image #7 */}
      <div className="relative w-full h-full py-4 ">
        <Image
          priority
          width={700}
          height={700}
          src={picture7}
          alt="/"
          className="object-cover w-full h-[600px] rounded-3xl"
        />
      </div>
    </div>
  );
};

export default FurnicoImages;
