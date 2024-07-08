import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-6 py-4 bg-white">
      <Link href="/" className="text-3xl font-bold">
        Darko Mihajlovski
      </Link>
      <Link href="/about" className="text-xl font-semibold">
        About
      </Link>
    </div>
  );
};

export default Navbar;
