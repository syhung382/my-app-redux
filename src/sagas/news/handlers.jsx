import { call, put, select } from "redux-saga/effects";
import requestGetNews from "./requests";
import { setLoading, setNews } from "./newSlice";

export default function* handleGetNews() {
  let query = "";

  try {
    const newQuery = yield select((state) => state.news.query);
    if (newQuery === "") {
      query = "react";
    } else {
      query = newQuery;
    }

    yield put(setLoading(true));
    const response = yield call(requestGetNews, query);
    const { hits } = response.data;
    yield put(setNews(hits));
    yield put(setLoading(false));
  } catch (error) {
    console.error("Error in handleGetNews:", error.message);

    // yield put(setErrorMessage(error.message));
  }
}
