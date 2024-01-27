import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import store from "../Redux/Store";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";

export default function GptMovieSuggestion() {
  const gpt = useSelector((store) => store?.gpt?.gptMovies);

  return (
    <>
      <div className="p-4 m-4 bg-black text-white flex flex-wrap bg-opacity-100 ">
        {gpt != null ? (
          gpt.map((obj, index) => (
            <div key={index}>
              <MovieCard key={obj?.id} posterPath={obj?.poster_path} />
            </div>
          ))
        ) : (
          <>
            <div className="p-4 m-4 bg-black text-white flex flex-wrap text-center">
              <h1 className="bg-opacity-70 ">Enter Movie Name</h1>
            </div>
          </>
        )}
      </div>
    </>
  );
}
