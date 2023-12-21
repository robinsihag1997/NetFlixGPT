import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

export default function VideoBackground({ movieId }) {
  const [trailerId, SetTrailerId] = useState(null);
  const getMovieVideos = async () => {
    const resVideo = await fetch(
      "https://api.themoviedb.org/3/movie/787699/videos?language=en-US",
      API_OPTIONS
    );
    const data = await resVideo.json();
    // console.log(data);
    const filterTrailer = data.results.filter(
      (value, index) => value.name === "Official Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer : data.results[0];
    console.log(trailer[0]);
    SetTrailerId(trailer[0].key);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
      ></iframe>
    </div>
  );
}
