import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayinMovies from "../hooks/useNowPlayinHook";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

export default function Browse() {
  useNowPlayinMovies();
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
}
