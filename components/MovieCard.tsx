import Movie from "@/types/movie";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { CiStar } from "react-icons/ci";

const MovieCard: FC<Movie> = ({ id, poster_path, vote_average, title }) => {
  return (
    <Link
      href={`/movie/${id}`}
      className="bg-[#101625] rounded-lg p-2 space-y-2"
    >
      <div className="relative">
        <Image
          src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
          alt={title}
          width={400}
          height={400}
          layout="responsive"
          className="rounded-lg hover:scale-105 transition-all duration-300"
          loading="lazy"
        />

        <div className="absolute top-2 left-2 bg-[#101625] flex items-center justify-center gap-1 p-1 text-[#ffad49] rounded-md">
          <CiStar size={20} />
          <small className="text-[16px]">{vote_average.toFixed(1)}</small>
        </div>
      </div>

      <p className="text-[#c8d6d7] font-medium p-2">{title}</p>
    </Link>
  );
};

export default MovieCard;
