"use client";

import Movie from "@/types/movie";
import React, { FC, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Tab from "./Tab";

const MoviesContainer = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [shows, setShows] = useState<Movie[]>([]);
  const [activeTab, setActiveTab] = useState("movies");

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

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        );

        const data = await response.json();
        setShows(data.results);
      } catch (error) {}
    };

    fetchTvShows();
  }, []);

  return (
    <div className="">
      <div className="bg-[#101625] w-fit flex items-center gap-3 p-3 rounded-xl">
        <Tab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabName="movies"
        />
        <Tab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabName="TV shows"
        />
      </div>

      <div className="grid grid-cols-2 my-4 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {activeTab === "movies" ? (
          <>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                activeTab={activeTab}
              />
            ))}
          </>
        ) : (
          <>
            {shows.map((show) => (
              <MovieCard
                key={show.id}
                id={show.id}
                title={show.name || ""}
                poster_path={show.poster_path}
                vote_average={show.vote_average}
                activeTab={activeTab}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MoviesContainer;
