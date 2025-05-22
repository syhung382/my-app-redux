import { createSlice, createAction } from "@reduxjs/toolkit";

export const orderAction = createAction("update/loading");

const newSlice = createSlice({
  name: "news",
  initialState: {
    hits: [],
    loading: false,
    errorMessage: "",
    query: "",
  },
  reducers: {
    setNews: (state, action) => ({
      ...state,
      hits: action.payload,
    }),
    // @ts-ignore
    getNews() {},
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setErrorMessage: (state, action) => ({
      ...state,
      errorMessage: action.payload,
    }),
    setQuery: (state, action) => ({
      ...state,
      query: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(orderAction, (state, action) => {
      state.loading = action.payload;
    });
  },
});

export const { setNews, getNews, setLoading, setErrorMessage, setQuery } =
  newSlice.actions;
export default newSlice.reducer;
