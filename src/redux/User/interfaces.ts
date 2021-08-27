import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export interface IUsersReducer<T>
  extends CaseReducer<IUsersState, PayloadAction<T>> {}

export interface IUsersState {
  fetchingGetUsers: boolean
  errorGetUsers: string | null

  users: IGetUsersSuccessPayload[]
}

export interface IGetUsersSuccessPayload {
  follower: string
  following: string
  entry: number[]
  reward: number[]
  firstName: string
  lastName: string
  id: string
  avatar: string
}
export interface IGetUsersErrorPaylaod {
  error: string
}
