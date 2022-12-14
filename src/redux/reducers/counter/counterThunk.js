import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCount } from "../../../services/counter/counterAPI";

const CounterThunk = {
  incrementAsync: createAsyncThunk("counter/fetchCount", async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }),
};

export default CounterThunk;
