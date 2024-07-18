import React from "react";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  return (
    <div className="bg-[#101625] flex items-center gap-3 border border-[#1b2236] p-4 rounded-xl">
      <FaSearch size={22} />

      <input
        type="text"
        placeholder="Search movies or tv shows"
        className="bg-transparent w-full focus:outline-none"
      />
    </div>
  );
}

export default Searchbar;
