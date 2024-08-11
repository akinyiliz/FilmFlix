import Movie from "@/types/movie";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { CiStar } from "react-icons/ci";

interface MovieCardProps extends Movie {
  activeTab?: string;
}

const MovieCard: FC<MovieCardProps> = ({
  id,
  poster_path,
  vote_average,
  title,
  activeTab,
}) => {
  return (
    <Link
      href={`${activeTab === "movies" ? `movie/${id}` : `tv-show/${id}`}`}
      className="bg-[#101625] rounded-lg p-2 space-y-2"
    >
      <div className="relative">
        <Image
          src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
          alt={title || "Movie Card"}
          width={400}
          height={400}
          className="rounded-lg"
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
