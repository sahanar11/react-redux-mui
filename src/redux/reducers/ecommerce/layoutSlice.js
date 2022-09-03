import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
};

export const LayoutSlice = createSlice({
  name: "layoutState",
  initialState,
  reducers: {
    setSidebarOpen: (state, { payload }) => {
      state.sidebarOpen = payload?.sidebarOpen;
    },
  },
});

export const LayoutSelector = {
  sidebarOpen: (state) => state[LayoutSlice.name]?.sidebarOpen,
};
export const LayoutActions = LayoutSlice.actions;
export const LayoutReducer = LayoutSlice.reducer;
export default LayoutSlice;
