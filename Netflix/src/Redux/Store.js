import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice";
import moviesReducer from "./MovieSlice";
import gptReducer from "./gptSlice";

let store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default store;
