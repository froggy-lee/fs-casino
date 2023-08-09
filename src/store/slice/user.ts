import { createSlice } from "@reduxjs/toolkit";

// type userState = {
//   createdAt: string;
//   email: string;
//   firstName: string;
//   id: string;
//   lastName: string;
//   money: number;
//   phone: string;
//   updateAt: string;
//   username: string;
// };

const initialState = {
  userInfo: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleUpdateUser: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
});

export const selectUserInfo = (state: any) => state.user.userInfo;

export const { handleUpdateUser } = userSlice.actions;

export default userSlice.reducer;
