import React from "react";
import picture1 from "../../public/images/Dashboard.png";
import picture2 from "../../public/images/Order List.png";
import picture3 from "../../public/images/Profile Page (Edit Profile).png";
import picture4 from "../../public/images/Web App (Menu Layout 2 Expanded).png";
import picture5 from "../../public/images/Web App (Menu Layout Expanded).png";
import picture6 from "../../public/images/Web App Login (final).png";
import picture7 from "../../public/images/Dashboard.png";
import Image from "next/image";

const TheTomatoImages = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full h-full relative px-6 py-4">
      {/* Image #1 */}
      <div className="relative w-full h-screen py-12 ">
        <Image
          priority={true}
          src={picture1}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
      {/* Image #2 */}
      <div className="relative w-full h-screen py-4 ">
        <Image
          priority={true}
          src={picture2}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
      {/* Image #3 */}
      <div className="relative w-full h-screen py-4 ">
        <Image
          priority={true}
          src={picture3}
          alt="/"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
      {/* Image #4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  );
};

export default TheTomatoImages;
