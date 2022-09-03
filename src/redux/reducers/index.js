import { combineReducers } from "@reduxjs/toolkit";

import CounterSlice from "./counter/counterSlice";
import LayoutSlice from "./ecommerce/layoutSlice";

const RootReducer = combineReducers({
  [CounterSlice.name]: CounterSlice.reducer,

  // ecommerce
  [LayoutSlice.name]: LayoutSlice.reducer,
});

export default RootReducer;
