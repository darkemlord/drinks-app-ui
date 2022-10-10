import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../constants/environment";

type LoginAuthenticationParams = {
  email: string;
  password: string;
};

console.log("hello");

export const getAuthInfoAsUser = createAsyncThunk(
  "auth/login",
  async (params: LoginAuthenticationParams) => {
    try {
      const response = await axios.post(`${URL}/auth/login`, params);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
