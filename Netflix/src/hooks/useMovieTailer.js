import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Redux/MovieSlice";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const resVideo = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const data = await resVideo.json();
    // console.log(data);
    const filterTrailer = data.results.filter(
      (value, index) => value.name === "Official Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer : data.results[0];
    // console.log(trailer);
    // SetTrailerId(trailer[0].key);
    dispatch(addTrailerVideo(trailer[0]));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
