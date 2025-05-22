import { createAsyncThunk } from "@reduxjs/toolkit";
import requestGetNews from "./requests";

export const handleFetchNew = createAsyncThunk(
  "news/fetchNew",
  // eslint-disable-next-line no-unused-vars
  async (query, thunkAPI) => {
    // @ts-ignore
    const response = await requestGetNews(query);
    return response.data.hits;
  }
);
