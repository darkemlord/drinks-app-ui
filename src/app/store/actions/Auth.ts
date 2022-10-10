import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type LoginAuthenticationParams = {
  email: string;
  password: string;
};

const fetchAuth = async (params: LoginAuthenticationParams) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/login",
      params
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAuthInfoAsUser = createAsyncThunk("auth/login", async () => {
  const response = await fetchAuth({
    email: "emanuel@email.com",
    password: "sabroso1234",
  });
  return response;
});
