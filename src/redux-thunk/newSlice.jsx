import { createAction, createSlice } from "@reduxjs/toolkit";
import { handleFetchNew } from "./handles";

const initialState = {
  hits: [],
  loading: false,
  errorMessage: "",
  query: "",
};

export const setLoading = createAction("setLoading");

const newSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    // setLoading: (state, action) => ({
    //   ...state,
    //   loading: action.payload,
    // }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleFetchNew.fulfilled, (state, action) => {
        state.hits = action.payload;
        state.loading = false;
      })
      .addCase(handleFetchNew.pending, (state) => {
        state.loading = true;
      })
      .addCase(handleFetchNew.rejected, (state) => {
        state.loading = false;
      });
    builder.addCase(setLoading, (state, action) => {
      state.loading = action.payload;
    });
  },
});

// export const { setLoading } = newSlice.actions;

export default newSlice.reducer;
