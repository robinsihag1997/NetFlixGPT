import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice";
import moviesReducer from "./MovieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

let store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default store;
