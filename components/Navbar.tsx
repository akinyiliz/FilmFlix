import React from "react";

function Navbar() {
  return (
    <div className=" fixed top-0 left-0 right-0 z-10 bg-[#121829]/80 backdrop-blur-md p-4 md:px-6">
      <div className="flex justify-between items-center  lg:max-w-6xl lg:mx-auto">
        <h1 className="text-[#c8d6d7] font-extrabold text-3xl">FilmFlix</h1>

        <button className="font-bold text-xl">My Watchlist</button>
      </div>
    </div>
  );
}

export default Navbar;
