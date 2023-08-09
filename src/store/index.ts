import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/store/slice/modal";
import loadingReducer from "@/store/slice/loading";
import authReducer from "@/store/slice/auth";
import userReducer from "@/store/slice/user";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    loading: loadingReducer,
    auth: authReducer,
    user: userReducer,
  },
  devTools: true,
});
