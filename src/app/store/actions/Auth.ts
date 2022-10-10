import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type LoginAuthenticationParams = {
  email: string;
  password: string;
};

export const getAuthInfoAsUser = createAsyncThunk(
  "auth/login",
  async (params: LoginAuthenticationParams) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        params
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
