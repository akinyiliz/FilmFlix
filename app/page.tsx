"use client";

import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import MovieCard from "@/components/MovieCard";
import MoviesContainer from "@/components/MoviesContainer";
import Movie from "@/types/movie";
import { useState } from "react";

export default function Home() {
  const [searchMovieResults, setSearchMovieResults] = useState<Movie[]>([]);
  const [searchShowResults, setSearchShowResults] = useState<Movie[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (query: string) => {
    setIsSearching(true);

    const [movieResponse, showResponse] = await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      ),
      fetch(
        `https://api.themoviedb.org/3/search/tv?query=${query}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      ),
    ]);

    const movieData = await movieResponse.json();
    const showData = await showResponse.json();

    // console.log(movieData.results);
    // console.log(showData.results);

    setSearchMovieResults(movieData.results);
    setSearchShowResults(showData.results);
    setIsSearching(false);
  };

  return (
    <div className="mt-16 flex flex-col px-4 md:px-6 lg:max-w-6xl lg:mx-auto">
      <Hero onSearch={handleSearch} />

      {isSearching ? (
        <Loader />
      ) : searchMovieResults.length > 0 || searchShowResults.length > 0 ? (
        <div className="my-4">
          <h2 className="text-2xl font-bold mb-4">Search Results</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {searchMovieResults.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
              />
            ))}
            {searchShowResults.map((show) => (
              <MovieCard
                key={show.id}
                id={show.id}
                title={show.name || ""}
                poster_path={show.poster_path}
                vote_average={show.vote_average}
              />
            ))}
          </div>
        </div>
      ) : (
        <MoviesContainer />
      )}
    </div>
  );
}
