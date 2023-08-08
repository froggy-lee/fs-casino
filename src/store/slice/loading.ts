import { createSlice } from "@reduxjs/toolkit";

type loadingState = {
  isLoadingPage: boolean;
};

const initialState = {
  isLoadingPage: false,
} as loadingState;

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    toggleLoadingPage: (state) => {
      state.isLoadingPage = !state.isLoadingPage;
    },
  },
});

export const selectIsLoadingpage = (state: any) => state.loading.isLoadingPage;

export const { toggleLoadingPage } = loadingSlice.actions;

export default loadingSlice.reducer;
