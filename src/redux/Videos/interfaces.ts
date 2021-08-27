import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export interface IVideosReducer<T>
  extends CaseReducer<IVideosState, PayloadAction<T>> {}

export interface IVideosState {
  fetchingGetVideos: boolean
  errorGetVideos: string | null

  videos: IGetVideosSuccessPayload[]
}

export interface IGetVideosSuccessPayload {
  createdAt: string
  title: string
  url: string
  brand: string
  id: string
}
export interface IGetVideosErrorPaylaod {
  error: string
}
