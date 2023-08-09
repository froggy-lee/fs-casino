import { createSlice } from "@reduxjs/toolkit";

type authState = {
  isAuth: boolean;
};

const initialState = {
  isAuth: false,
} as authState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleAuth: (state, { payload }) => {
      state.isAuth = payload;
      localStorage.setItem("auth", payload);
    },
  },
});

export const selectIsAuth = (state: any) => state.auth.isAuth;

export const { handleAuth } = authSlice.actions;

export default authSlice.reducer;
