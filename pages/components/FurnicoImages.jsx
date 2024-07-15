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
          alt="picture1"
          className="object-cover w-full  h-[600px] rounded-3xl"
        />
      </div>
      {/* Image #2 */}
      <div className="relative w-full h-4/5 py-4 ">
        <Image
          priority
          src={picture2}
          alt="picture2"
          className="object-cover w-full  h-[600px] rounded-3xl"
        />
      </div>
      {/* Image #3 */}
      <div className="relative w-full h-4/5 py-4 ">
        <Image
          priority
          src={picture3}
          alt="picture3"
          className="object-cover w-full  h-[600px] rounded-3xl"
        />
      </div>
      {/* Image #4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative w-full h-4/5 py-4 ">
          <Image
            priority
            src={picture4}
            alt="picture4"
            className="object-cover w-full  h-[600px] rounded-3xl"
          />
        </div>
        {/* Image #5 */}
        <div className="relative w-full h-4/5 py-4 ">
          <Image
            priority
            src={picture5}
            alt="picture5"
            className="object-cover w-full  h-[600px] rounded-3xl"
          />
        </div>
      </div>
      {/* Image #6 */}
      <div className="relative w-full h-4/5 py-4 ">
        <Image
          priority
          src={picture6}
          alt="picture6"
          className="object-cover w-full  h-[600px] rounded-3xl"
        />
      </div>
      {/* Image #7 */}
      <div className="relative w-full h-full py-4 ">
        <Image
          priority
          src={picture7}
          alt="picture7"
          className="object-cover w-full h-[600px] rounded-3xl"
        />
      </div>
    </div>
  );
};

export default FurnicoImages;
