import { createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchCount } from "../../../services/counter/counterAPI";

const UserThunk = {
  createUser: createAsyncThunk(
    `${UserSlice.name}/createUser`,
    async (userDetails) => {
      // const response = await createUser(amount);
      // return response.data;
    }
  ),
};

export default UserThunk;
