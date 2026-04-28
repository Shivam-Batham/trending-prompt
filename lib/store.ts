import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authSlice } from "./features/auth/authSlice";
import { feedSlice } from "./features/feed/feedSlice";
import { userSlice } from "./features/user/userSlice";

export interface LazyLoadedSlices {}

export const rootReducer = combineSlices(authSlice, feedSlice,userSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
