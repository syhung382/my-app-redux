import { combineReducers } from "@reduxjs/toolkit";
import newsSlice from "./news/newSlice";

export const reducer = combineReducers({
  news: newsSlice,
});
