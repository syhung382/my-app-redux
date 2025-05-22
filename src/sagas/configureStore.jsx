import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
import { reducer } from "./reducer";
// import rootSaga from "./rootSaga";
import logger from "redux-logger";

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger),
  // middleware: (gDM) => gDM().concat(sagaMiddleware),
});

// sagaMiddleware.run(rootSaga);

export default store;
