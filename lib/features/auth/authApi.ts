import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/utils/axiosIntance";
import { IauthMeResponse } from "@/types/auth";
import {
  IregisterResponse,
  LoginPayload,
  LoginResponse,
  LogoutResponse,
} from "./authTypes";
import { AxiosError } from "axios";

export const registerUser = createAsyncThunk<
  IregisterResponse,
  { name: string; email: string; password: string },
  { rejectValue: string }
>("auth/registerUser", async (payload, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.post("/api/user/create-user", payload);

    return res.data;
  } catch (err) {
    return rejectWithValue("Login failed");
  }
});

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: string }
>("auth/loginUser", async (payload, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.post("/api/auth/login", payload);

    return res.data;
  } catch (err) {
    return rejectWithValue("Login failed");
  }
});

export const logoutUser = createAsyncThunk<
  LogoutResponse,
  void,
  { rejectValue: string }
>("auth/logoutUser", async (Payload, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post("/api/auth/logout", Payload);
    return response.data;
  } catch (error) {
    return rejectWithValue("Logout Failed.");
  }
});

export const currentUser = createAsyncThunk<IauthMeResponse, void, {rejectValue:{message:string}}>(
  "auth/me",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/api/auth/me");
      return response.data;
    } catch (error: any) {
      const err = error as AxiosError<{ message: string }>;

      return thunkAPI.rejectWithValue(
       { message: err.response?.data?.message || "Something went wrong",}
      );
    }
  },
);

export const refreshSession = createAsyncThunk(
  "auth/refreshSession",
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.post(
        "/api/auth/refresh",
        {},
        {
          withCredentials: true,
        },
      );

      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
      });
    }
  },
);
