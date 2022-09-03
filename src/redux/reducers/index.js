import { combineReducers } from "@reduxjs/toolkit";

import CounterSlice from "./counter/counterSlice";

const RootReducer = combineReducers({
  [CounterSlice.name]: CounterSlice.reducer,
});

export default RootReducer;
