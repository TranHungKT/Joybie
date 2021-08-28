import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export interface IRewardsReducer<T>
  extends CaseReducer<IRewardsState, PayloadAction<T>> {}

export interface IRewardsState {
  fetchingGetRewards: boolean
  errorGetRewards: string | null

  rewards: IGetRewardsSuccessPayload[]
}

export interface IGetRewardsSuccessPayload {
  createdAt: string
  title: string
  code: string
  validTill: string
  id: string
  imageUrl: string
  bgrImg: string
  webUrl: string
}
export interface IGetRewardsErrorPayload {
  error: string
}
