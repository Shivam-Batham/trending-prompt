import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./authTypes";
import axiosInstance from "@/utils/axiosIntance";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  success: Boolean;
  message: string;
}

interface LogoutResponse{
  success:boolean;
  message:string;
}

export const registerUser = createAsyncThunk<
  {name:string, token:string,_id:string},
  {name:string,email:string,password:string},
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
    const res = await axiosInstance.post("/api/user/login", payload);

    return res.data;
  } catch (err) {
    return rejectWithValue("Login failed");
  }
});

export const logoutUser = createAsyncThunk<LogoutResponse, void,{rejectValue:string}>("auth/logoutUser", async (Payload, {rejectWithValue})=>{
  try {
    const response  = await axiosInstance.post("/api/user/logout",Payload);
    return response.data;
  } catch (error) {
    return rejectWithValue("Logout Failed.")
  }
})
