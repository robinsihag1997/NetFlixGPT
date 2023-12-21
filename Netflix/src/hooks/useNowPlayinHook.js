import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Redux/MovieSlice";
import { useEffect } from "react";
import { API_OPTIONS, URL } from "../utils/constant";

const useNowPlayinMovies = () => {
  const dispatch = useDispatch();

  const apiData = async () => {
    const apiRes = await fetch(URL, API_OPTIONS);
    const data = await apiRes.json();
    console.log(data.results);
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    apiData();
  }, []);
};

export default useNowPlayinMovies;
