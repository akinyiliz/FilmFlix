"use client";

import MovieCard from "@/components/MovieCard";
import { useWatchlist } from "@/context/WatchlistContext";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

function Page() {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  return (
    <div className="mt-16 flex flex-col px-4 w-full lg:max-w-6xl lg:mx-auto">
      {watchlist && watchlist.length > 0 ? (
        <div>
          <h3 className="text-center text-lg">
            {watchlist.length} movie(s) in Watchlist
          </h3>
          <div className="grid grid-cols-2 my-4 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {watchlist.map((item) => (
              <div key={item.id} className="relative">
                <MovieCard
                  id={item.id}
                  title={item.name || item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                />
                <button
                  className="absolute top-8 right-2 text-gray-400 hover:text-red-500"
                  onClick={() => removeFromWatchlist(item.id as number)}
                >
                  <MdOutlineClose size={28} />
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center mt-20">
          <h2 className="text-gray text-2xl lg:text-3xl">
            Your watchlist is empty.
          </h2>
        </div>
      )}
    </div>
  );
}

export default Page;
