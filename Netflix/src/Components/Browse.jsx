import React from "react";
import Header from "./Header";
import useNowPlayinMovies from "../hooks/useNowPlayinHook";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useMovieTrailer from "../hooks/useMovieTailer";

export default function Browse() {
  useNowPlayinMovies();
  usePopularMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
}
