import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./userTypes";
import { fetchUser } from "./userApi";

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
     builder
    .addCase(fetchUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Something went wrong";
    });
  },
});
