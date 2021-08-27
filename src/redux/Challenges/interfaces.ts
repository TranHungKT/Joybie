import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export interface IChallengesReducer<T>
  extends CaseReducer<IChallengesState, PayloadAction<T>> {}

export interface IChallengesState {
  fetchingGetChanllenges: boolean
  errorGetChanllenges: string | null

  challenges: IGetChallengesSuccessPayload[]
}

export interface IGetChallengesSuccessPayload {
  createdAt: string
  title: string
  brand: string
  description: string
  imageUrl: string
  numOfSave: number
  numOfDone: number
  id: string
}
export interface IGetChallengesErrorPayload {
  error: string
}
