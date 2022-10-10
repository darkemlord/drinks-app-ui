import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { AuthenticatioResponse, getAuthInfoAsUser } from "../actions/Auth";

export enum ReduxState {
  Idle = "idle",
  Pending = "pending",
  Fulfilled = "fulfilled",
  Rejected = "rejected",
}

export interface AuthLoginState {
  fetch: ReduxState;
  fetchError: string | null;
  userInfo?: AuthenticatioResponse;
}

const initialState: AuthLoginState = {
  fetch: ReduxState.Idle,
  fetchError: null,
  userInfo: undefined,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAuthInfoAsUser.pending, (state) => {
        return {
          ...state,
          fetch: ReduxState.Pending,
        };
      })
      .addCase(getAuthInfoAsUser.fulfilled, (state, action) => {
        const { payload } = action;
        return {
          ...state,
          fetch: ReduxState.Fulfilled,
          userInfo: payload,
        };
      })
      .addCase(getAuthInfoAsUser.rejected, (state, action) => {
        const { payload } = action;
        return {
          ...state,
          fetch: ReduxState.Rejected,
          fetchError: payload.response.data.error,
        };
      });
  },
});
export const authenticationState = (state: RootState) => state.auth;

export default authenticationSlice.reducer;
