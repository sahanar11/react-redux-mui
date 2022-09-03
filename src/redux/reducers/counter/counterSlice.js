import { createSlice } from "@reduxjs/toolkit";
import CounterThunk from "./counterThunk";

const initialState = {
  value: 0,
  status: "idle",
};

export const CounterSlice = createSlice({
  name: "counterState",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CounterThunk.incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(CounterThunk.incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export const CounterActions = CounterSlice.actions;

export const CounterSelector = {
  count: (state) => state[CounterSlice.name]?.value,
  status: (state) => state[CounterSlice.name]?.status,
};

export default CounterSlice;
