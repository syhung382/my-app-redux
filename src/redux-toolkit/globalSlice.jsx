import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    // isLoading: false,
    // isError: false,
    // errorMessage: "",
    // successMessage: "",
    darkMode: false,
  },
  reducers: {
    // setLoading: (state, action) => {
    //     state.isLoading = action.payload;
    // },
    // setError: (state, action) => {
    //     state.isError = action.payload.isError;
    //     state.errorMessage = action.payload.errorMessage;
    // },
    // setSuccess: (state, action) => {
    //     state.successMessage = action.payload;
    // },
    toggleDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleDarkMode } = globalSlice.actions;

export default globalSlice.reducer;
