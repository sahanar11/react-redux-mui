import { combineReducers } from "@reduxjs/toolkit";

import CounterSlice from "./counter/counterSlice";

// ecommerce
import LayoutSlice from "./ecommerce/layoutSlice";
import OrderSlice from "./ecommerce/orderSlice";

const RootReducer = combineReducers({
  [CounterSlice.name]: CounterSlice.reducer,

  // ecommerce
  [LayoutSlice.name]: LayoutSlice.reducer,
  [OrderSlice.name]: OrderSlice.reducer,
});

export default RootReducer;
