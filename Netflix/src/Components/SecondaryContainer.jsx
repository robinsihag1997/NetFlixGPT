import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export default function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);

  return (
    movies?.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-52 relative pl-3 z-20  ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"PopularMovies"} movies={movies.popularMovies} />
          <MovieList title={"New Movies"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.popularMovies} />
        </div>
      </div>
    )
  );
}
