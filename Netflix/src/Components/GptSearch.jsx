import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { backGroundUrl } from "../utils/constant";

export default function GptSearch() {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={backGroundUrl} alt="backGroundImage" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
}
