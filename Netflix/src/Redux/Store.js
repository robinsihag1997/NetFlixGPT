import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice";
import moviesReducer from "./MovieSlice";

let store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default store;
