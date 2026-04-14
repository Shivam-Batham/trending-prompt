import { createSlice } from "@reduxjs/toolkit";
import { fetchFeed } from "./feedAPi";
import { FeedState } from "./feedTypes";

const initialState:FeedState ={
    feedData : [],
    loading:false,
    error:null,
    page:1,
    totalPages:1
}

export const feedSlice = createSlice({
    name : "feed",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchFeed.pending, (state)=>{
            state.loading =  true;
            state.error = null;
        })
        .addCase(fetchFeed.fulfilled,(state, action)=>{
            state.loading= false;
            state.error=null;
            state.feedData =  action.payload.data;
            state.page =  action.payload.page;
            state.totalPages =  action.payload.totalPages;
        })
        .addCase(fetchFeed.rejected, (state,action)=>{
            state.loading =  false;
            state.error = action.payload as string ?? "Something went wrong.";
        })
    }
})

export const feedReducer = feedSlice.reducer;