import { createSlice } from "@reduxjs/toolkit";
import UserThunk from "./userThunk";

const initialState = {
  loggedInUser: undefined,
  updateInProgress: false,
  userCreated: undefined,
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
        state.userCreated = action?.meta?.arg?.userDetails;
      })
      .addCase(UserThunk.createUser.rejected, (state, action) => {
        state.updateInProgress = false;
        state.userCreated = undefined;
      });
  },
});

export const UserSelector = {
  loggedInUser: (state) => state[UserSlice.name]?.loggedInUser,
  updateInProgress: (state) => state[UserSlice.name]?.updateInProgress,
  userCreated: (state) => state[UserSlice.name]?.userCreated,
};

export const UserActions = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
export default UserSlice;
