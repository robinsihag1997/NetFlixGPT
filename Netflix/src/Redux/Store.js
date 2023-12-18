import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice";

let store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
