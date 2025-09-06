import { dummyShowsData } from "@/assets/assets";
import { BlurCircle, MovieCard } from "@/components";
import React from "react";

const Favorite = () => {
  return dummyShowsData.length > 0 ? (
    <div className="px-4 md:px-6 lg:px-8 xl:px-44 overflow-hidden mx-auto my-30 relative">
      <h1 className="lg:text-4xl text-2xl font-semibold text-center my-12">
        Your Favorites
      </h1>
      <BlurCircle top="50px" left="50px" />
      <BlurCircle bottom="50px" right="50px" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-md:justify-center gap-6 mx-auto w-full max-w-[1500px]">
        {dummyShowsData.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center">No Movies Available</h1>
    </div>
  );
};

export default Favorite;
