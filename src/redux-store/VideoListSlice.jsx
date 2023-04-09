import { createSlice } from "@reduxjs/toolkit";

const VideoListSlice = createSlice({
  name: "videoList",
  initialState: {
    videoLists: null,
    isPending: false,
    errorValue: null,
  },
  reducers: {
    initialRender: (state, action) => {
      state.errorValue = null;
      state.isPending = false;
      state.videoLists = action.payload;
    },
    searchByKeyword: (state, action) => {
      state.errorValue = null;
      state.isPending = false;
      state.videoLists = action.payload;
    },
    clearedVideoList: (state, action) => {
      state.videoLists = [];
    },
    loadingMethod: (state, action) => {
      state.isPending = true;
      state.videoLists = null;
      state.errorValue = null;
    },
    errorMethod: (state, action) => {
      
      state.videoLists = [];
      state.errorValue = action.payload;
      state.isPending = false;
    },
  },
});

export const { initialRender, searchByKeyword, clearedVideoList , errorMethod , loadingMethod   } =
  VideoListSlice.actions;

export default VideoListSlice.reducer;
