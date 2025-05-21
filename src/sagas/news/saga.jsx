import { takeLatest } from "redux-saga/effects";
import { getNews } from "./newSlice";
import handleGetNews from "./handlers";

export function* newsSaga() {
  yield takeLatest(getNews.type, handleGetNews);
}
