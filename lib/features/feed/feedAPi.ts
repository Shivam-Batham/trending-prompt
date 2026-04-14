import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/utils/axiosIntance";
import { FeedResponse } from "./feedTypes";


export const fetchFeed =  createAsyncThunk<FeedResponse,void>("feed/fetchFeed", async(_ , {rejectWithValue})=>{
    try {
        const response  =  await axiosInstance.get("/api/feed");
        return response.data;
    } catch (error) {
        return rejectWithValue("Feed fetch failed.")
    }
})