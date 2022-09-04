import { combineReducers } from "@reduxjs/toolkit";

import CounterSlice from "./counter/counterSlice";

// ecommerce
import LayoutSlice from "./ecommerce/layoutSlice";
import UserSlice from "./ecommerce/userSlice";
import OrderSlice from "./ecommerce/orderSlice";

const RootReducer = combineReducers({
  [CounterSlice.name]: CounterSlice.reducer,

  // ecommerce
  [LayoutSlice.name]: LayoutSlice.reducer,
  [UserSlice.name]: UserSlice.reducer,
  [OrderSlice.name]: OrderSlice.reducer,
});

export default RootReducer;
