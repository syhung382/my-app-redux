import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice, { incrementByValue } from "./counterSlice";
import globalSlice from "./globalSlice";
import logger from "redux-logger";

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching action:", action);
  const result = next(action);
  console.log("Next state:", store.getState());
  return result;
};

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger),
});

// store.subscribe(() => {
//   const state = store.getState();
//   console.log("State changed:", state.counter.value);
// });

// store.dispatch(incrementByValue(1));
// store.dispatch(incrementByValue(3));
// store.dispatch(incrementByValue(5));

export default store;
