import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

export default function MovieCard({ posterPath }) {
  if (!posterPath) return null;
  return (
    <div className=" w-40 pr-4 ">
      <img
        className=" rounded-lg"
        src={IMG_CDN_URL + posterPath}
        alt="Movie Card"
      />
    </div>
  );
}
