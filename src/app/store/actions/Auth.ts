import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../constants/environment";
import { RootState } from "../../store";

type LoginAuthenticationParams = {
  email: string;
  password: string;
};

export type AuthenticatioResponse = {
  exp: string;
  token: string;
  user_id: number;
  username: string;
};

export const getAuthInfoAsUser = createAsyncThunk<
  AuthenticatioResponse,
  LoginAuthenticationParams,
  { state: RootState; rejectValue: any; rejectedMeta: void }
>("auth/login", async (params, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${URL}/auth/login`, params);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
