import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
  },
  reducers: {
    toggelGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      state.gptMovies = action.payload;
    },
  },
});
export const { toggelGptSearchView, addGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
