import { createSlice } from '@reduxjs/toolkit';

import {
  getVideosError,
  getVideosRequest,
  getVideosSuccess,
} from './VideosActions';

import { IVideosState } from './interfaces';

const initialState: IVideosState = {
  fetchingGetVideos: false,
  errorGetVideos: null,

  videos: [],
};

export const VideosSlice = createSlice({
  name: 'Videos',
  initialState,
  reducers: {
    getVideosError,
    getVideosRequest,
    getVideosSuccess,
  },
});

export const VideosActions = VideosSlice.actions;

export default VideosSlice.reducer;
