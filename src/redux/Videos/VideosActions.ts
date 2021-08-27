import {
  IVideosReducer,
  IGetVideosSuccessPayload,
  IGetVideosErrorPaylaod,
} from './interfaces';

export const getVideosRequest: IVideosReducer<undefined> = (state) => {
  state.fetchingGetVideos = true;
  state.errorGetVideos = null;
};

export const getVideosSuccess: IVideosReducer<IGetVideosSuccessPayload[]> = (
  state,
  action,
) => {
  const videos = action.payload;

  state.videos = videos;
  state.fetchingGetVideos = false;
  state.errorGetVideos = null;
};

export const getVideosError: IVideosReducer<IGetVideosErrorPaylaod> = (
  state,
  action,
) => {
  state.fetchingGetVideos = false;
  state.errorGetVideos = action.payload.error;
  state.videos = [];
};
