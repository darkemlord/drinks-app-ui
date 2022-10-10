import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchAuth = async () => {
  axios
    .get("http://localhost:3000/auth/login")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const getAuthInfoAsUser = createAsyncThunk("auth/login", async () => {
  const response = await fetchAuth();
  return response;
});
