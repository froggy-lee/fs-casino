import { createSlice } from "@reduxjs/toolkit";

type modalState = {
  showLogin: boolean;
  showRegister: boolean;
};

const initialState = {
  showLogin: false,
  showRegister: false,
} as modalState;

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showLoginModal: (state, { payload }) => {
      state.showLogin = payload;
    },
    showRegisterModal: (state, { payload }) => {
      state.showRegister = payload;
    },
  },
});

export const selectShowLogin = (state: any) => state.modal.showLogin;
export const selectShowRegister = (state: any) => state.modal.showRegister;

export const { showLoginModal, showRegisterModal } = modalSlice.actions;

export default modalSlice.reducer;
