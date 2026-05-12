import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "./authTypes";
import {
  currentUser,
  loginUser,
  logoutUser,
  refreshSession,
  registerUser,
} from "./authApi";

const initialState: AuthState = {
  userId: null,
  user: null,
  role: "user",
  status: "idle",
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong";
      })

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.status = "authenticated";
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong";
      })

      .addCase(currentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.userId = action.payload.user._id;
        state.role = action.payload.user.role;
        state.error = null;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = "Something went wrong.";
      })

      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          state.user = null;
          state.userId = null;
          state.status = "idle";
        }
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong";
      })

      .addCase(refreshSession.pending, (state) => {
        state.loading = true;
        state.status = "checking";
      })
      .addCase(refreshSession.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.status = "authenticated";
      })
      .addCase(refreshSession.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.status = "unauthenticated";
        state.error = "Something went wrong";
      });
  },
});

export const {
  // reducers
} = authSlice.actions;
export const authReducer = authSlice.reducer;
