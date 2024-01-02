import React from "react";
import Header from "./Header";
import useNowPlayinMovies from "../hooks/useNowPlayinHook";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import store from "../Redux/Store";

export default function Browse() {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayinMovies();
  usePopularMovies();

  return (
    <>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
}
