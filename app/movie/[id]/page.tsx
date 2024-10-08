"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Movie from "@/types/movie";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { useWatchlist } from "@/context/WatchlistContext";
import Loader from "@/components/Loader";

const Page = () => {
  const params = useParams();
  const { id } = params;
  const [movie, setMovie] = useState<Movie>();

  const { addToWatchlist, watchlist } = useWatchlist();

  const isInWatchlist = watchlist.some((item) => item.id === Number(id));

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    if (id) {
      fetchMovie();
    }
  }, [id]);

  if (!movie) {
    return <Loader />;
  }

  return (
    <div className="mt-16 flex flex-col px-4 w-full md:px-6 lg:max-w-6xl lg:mx-auto">
      <div className="w-full relative">
        <div
          className="relative w-full h-[250px] bg-center bg-cover bg-no-repeat mt-10 overflow-hidden rounded-[2.5rem] md:h-[400px] lg:h-[450px]"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          }}
        ></div>
        <div className="w-full mt-[-72px] z-[2] bg-[#121829]/90 backdrop-blur-md rounded-3xl md:ml-[80px] md:max-w-xl">
          <div className="p-6 space-y-1 md:p-10">
            <small className="text-[#7a739d] text-lg">Movie</small>
            <h2 className="text-[#c8d6d7] text-xl font-bold md:text-3xl">
              {movie.title}
            </h2>
          </div>
        </div>
      </div>

      <div className="py-10 flex flex-col gap-20 md:flex-row">
        <div className="hidden md:block">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            loading="lazy"
            width={500}
            height={200}
            className="rounded-3xl"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h3 className="text-[#c8d6d7] text-[20px] font-bold">
            {movie.tagline}
          </h3>
          <p>{movie.overview}</p>
          <div className="bg-[#101625] w-fit flex items-center justify-center gap-1 p-1 text-[#ffad49] rounded-md">
            <CiStar size={20} />
            <small className="text-[16px]">
              {movie?.vote_average?.toFixed(2)}
            </small>
          </div>

          <div>
            <h4>Release date</h4>
            <p className="text-[#c8d6d7] text-xl">{movie.release_date}</p>
          </div>

          <div>
            <h4>Duration</h4>
            <p className="text-[#c8d6d7] text-xl">{movie.runtime}min</p>
          </div>

          <div>
            <h4>Genre</h4>
            <div className="text-[#c8d6d7] text-xl">
              {movie.genres?.map((genre, index) => (
                <span key={genre.id}>
                  <span>{genre.name}</span>
                  {index < (movie.genres?.length ?? 0) - 1 && ", "}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4>Country</h4>
            <div className="text-[#c8d6d7] text-xl">
              {movie.production_countries?.map((country, index) => (
                <span key={country.iso_3166_1}>
                  <span>{country.name}</span>
                  {index < (movie.production_countries?.length ?? 0) - 1 &&
                    ", "}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToWatchlist(movie)}
            className={`w-full py-2 text-[#c8d6d7] font-semibold text-lg rounded-xl ${
              isInWatchlist ? "bg-gray-500" : "bg-[#7c6ef6]"
            }`}
            disabled={isInWatchlist}
          >
            {isInWatchlist ? "Added" : "Add to Watchlist"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Page;
