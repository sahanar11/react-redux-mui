import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsInCart: 0,
};

export const OrderSlice = createSlice({
  name: "orderState",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { productId, qty } = payload || {};
      state.itemsInCart += qty;
    },
    removeFromCart: (state, { payload }) => {
      const { productId, qty } = payload || {};
      state.itemsInCart -= qty;
    },
  },
});

export const OrderSelector = {
  itemsInCart: (state) => state[OrderSlice.name]?.itemsInCart,
};

export const OrderActions = OrderSlice.actions;
export const OrderReducer = OrderSlice.reducer;
export default OrderSlice;
