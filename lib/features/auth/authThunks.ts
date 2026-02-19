import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./authTypes";
import axiosInstance from "@/app/utils/axiosIntance";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  token: string;
}

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: string }
>("auth/loginUser", async (payload, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.post("/user/login", payload);

    return res.data;
  } catch (err) {
    return rejectWithValue("Login failed");
  }
});
