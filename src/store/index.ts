import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/store/slice/modal";
import loadingReducer from "@/store/slice/loading";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    loading: loadingReducer,
  },
  devTools: true,
});
