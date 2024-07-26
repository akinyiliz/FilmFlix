import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className=" fixed top-0 left-0 right-0 z-10 bg-[#121829]/80 backdrop-blur-md p-4 md:px-6">
      <div className="flex justify-between items-center  lg:max-w-6xl lg:mx-auto">
        <Link href="/" className="text-[#c8d6d7] font-extrabold text-3xl">
          FilmFlix
        </Link>

        <Link href="/watchlist" className="font-bold text-xl">
          My Watchlist
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
