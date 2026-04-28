import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/utils/axiosIntance";
import { User } from "./userTypes";

export const fetchUser = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>(
  "user/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/api/user/me");
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch user"
      );
    }
  }
);
