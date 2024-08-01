"use client";

import React, { FC, FormEventHandler, useState } from "react";
import { FaSearch } from "react-icons/fa";

type HeroProps = {
  onSearch: (query: string) => void;
};

const Hero: FC<HeroProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="my-20 w-full md:w-3/4 lg:w-1/2 space-y-3">
      <p className="text-[#6d758b] text-lg">
        Find all the <span className="text-[#7c6ef6] font-bold">movies</span>{" "}
        you want to watch with ease.{" "}
        <span className="text-[#7c6ef6] font-bold">FilmFlix</span> helps you
        organize and manage your{" "}
        <span className="text-[#7c6ef6] font-bold">watchlist,</span> ensuring
        you always have something great lined up. Dive into{" "}
        <span className="text-[#7c6ef6] font-bold">detailed information</span>{" "}
        about each movie and make informed choices.
      </p>

      <div className="bg-[#101625] flex items-center gap-3 border border-[#1b2236] p-4 rounded-xl">
        <FaSearch size={22} />

        <form onSubmit={handleSearch} className="w-full">
          <input
            type="text"
            placeholder="Search movies or tv shows"
            className="bg-transparent w-full focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Hero;
