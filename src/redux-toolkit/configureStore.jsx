import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const reducer = combineReducers({
  counter: counterSlice,
});

const store = configureStore({
  reducer,
});

export default store;
