import { assets } from "@/assets/assets";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { StarIcon } from "lucide-react";
import timeFormat from "@/lib/timeFormat";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 xl:w-66 ">
      <img
        onClick={() => {
          navigate(`/movies/${movie._id}`);
          scrollTo(0, 0);
        }}
        src={movie.backdrop_path}
        alt=""
        className="rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer"
      />

      <div className="relative group w-fit">
        <p className="font-semibold mt-2 truncate cursor-pointer max-w-[200px]">
          {movie.title}
        </p>

        {/* Tooltip */}
        <div className="absolute left-0 top-full mt-1 hidden w-max max-w-xs rounded-md bg-gray-950 px-2 py-1 text-sm text-white shadow-lg group-hover:block z-50">
          {movie.title}
        </div>
      </div>

      <p className="text-sm text-gray-300 line-clamp-1">
        {new Date(movie.release_date).getFullYear()} •{" "}
        {movie.genres
          .slice(0, 2)
          .map((genre) => genre.name)
          .join(" | ")}{" "}
        • {timeFormat(movie.runtime)}
      </p>

      <div className="flex items-center justify-between mt-4 pb-3">
        <Button
          onClick={() => {
            navigate(`/movies/${movie._id}`);
            scrollTo(0, 0);
          }}
          className={"bg-primary-light hover:bg-primary-dull text-xs"}
        >
          Buy Tickets
        </Button>
        <p className="flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1">
          <StarIcon className="w-4 h-4 text-primary-light fill-primary-light" />{" "}
          {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
