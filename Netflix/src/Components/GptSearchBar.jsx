import React, { useState } from "react";
import lang from "../utils/LanguageConstant";
import { useDispatch, useSelector } from "react-redux";
// import store from "../Redux/Store";
// import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResults } from "../Redux/gptSlice";

export default function GptSearchBar() {
  const langKey = useSelector((store) => store.config.lang);
  const [userVAlue, setuserVAlue] = useState("");
  const dispatch = useDispatch();

  const searchMovieTMBD = async (movieName) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const jsonData = await data.json();
      console.log(jsonData);
      if (jsonData.results.length > 0) {
        dispatch(addGptMovieResults(jsonData.results));
      } else {
        dispatch(addGptMovieResults(null));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = async () => {
    if (userVAlue.length <= 0) {
      alert("please enter input");
    } else {
      console.log(userVAlue);
      searchMovieTMBD(userVAlue);
    }

    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query:" +
    //   valueref.current.value +
    //   "only give me name of 5 movies , comma seperated like the example result give ahead. Example Result: Gadar,Sholay,Don,Avengers,Golmaal";
    // valueref.current.value + "";
    // const gptResult = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResult.choices);

    setuserVAlue("");
  };

  return (
    <div className="  pt-[10%] flex justify-center ">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className=" p-4 m-4  col-span-8 "
          placeholder={lang[langKey]?.gptSearchPlaceholder}
          value={userVAlue}
          onChange={(e) => setuserVAlue(e.target.value)}
        />
        <button
          className=" col-span-4 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearch}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
}
