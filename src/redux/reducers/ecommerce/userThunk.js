import { createAsyncThunk } from "@reduxjs/toolkit";

import UserService from "../../../services/ecommerce/UserService";

const UserThunk = {
  createUser: createAsyncThunk("userState/createUser", async (payload) => {
    const userDetails = payload?.userDetails;
    const userDetailsResp = await UserService.createUser(userDetails);
    return {
      userDetails: userDetailsResp,
    };
  }),
};

export default UserThunk;
