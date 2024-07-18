"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type Movie = {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  first_air_date: string;
  vote_average: string;
  genre_ids: number[];
};

function MoviesContainer() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [shows, setShows] = useState();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        );

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {}
    };

    fetchMovies();
  }, []);

  console.log(movies);

  return (
    <div className="">
      <div className="bg-[#101625] w-fit flex items-center gap-3 p-3 rounded-xl">
        <button className="bg-[#7c6ef6] text-[#c8d6d7] font-bold px-6 py-2 rounded-lg">
          Movies
        </button>
        <button className="font-bold px-6 py-2">TV Shows</button>
      </div>

      <div className="grid grid-cols-2 my-4 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <div key={movie.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
              alt={movie.title}
              width={400}
              height={400}
              layout="responsive"
              className="rounded-lg"
              loading="lazy"
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesContainer;
