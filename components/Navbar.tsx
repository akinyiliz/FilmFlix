import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center py-4">
      <h1 className="text-[#c8d6d7] font-extrabold text-3xl">FilmFlix</h1>

      <button className="font-bold text-xl">My Watchlist</button>
    </div>
  );
}

export default Navbar;
