import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/store/slice/modal";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
  devTools: true,
});
