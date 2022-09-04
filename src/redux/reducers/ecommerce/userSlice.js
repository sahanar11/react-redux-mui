import { createSlice } from "@reduxjs/toolkit";
import UserThunk from "./userThunk";

const initialState = {
  loggedInUser: undefined,
  updateInProgress: false,
};

export const UserSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    login: (state, { payload }) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(UserThunk.createUser.pending, (state) => {
        state.updateInProgress = true;
      })
      .addCase(UserThunk.createUser.fulfilled, (state, action) => {
        state.updateInProgress = false;
      });
  },
});

export const UserSelector = {
  loggedInUser: (state) => state[UserSlice.name]?.loggedInUser,
};

export const UserActions = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
export default UserSlice;
