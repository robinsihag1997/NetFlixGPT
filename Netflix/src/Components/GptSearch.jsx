import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { backGroundUrl } from "../utils/constant";

export default function GptSearch() {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={backGroundUrl} alt="backGroundImage" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
}
