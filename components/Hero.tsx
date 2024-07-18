import React from "react";
import Searchbar from "./Searchbar";

function Hero() {
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

      <Searchbar />
    </div>
  );
}

export default Hero;
