import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Redux/MovieSlice";
import { useEffect } from "react";
import { API_OPTIONS, POPULAR_URL } from "../utils/constant";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const apiData = async () => {
    const apiRes = await fetch(POPULAR_URL, API_OPTIONS);
    const data = await apiRes.json();
    // console.log(data.results);
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    apiData();
  }, []);
};

export default usePopularMovies;
