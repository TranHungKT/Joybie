import { createSlice } from '@reduxjs/toolkit';

import {
  getRewardsRequest,
  getRewardsError,
  getRewardsSuccess,
} from './RewardsActions';

import { IRewardsState } from './interfaces';

const initialState: IRewardsState = {
  fetchingGetRewards: false,
  errorGetRewards: null,

  rewards: [],
};

export const RewardsSlice = createSlice({
  name: 'Rewards',
  initialState,
  reducers: {
    getRewardsRequest,
    getRewardsError,
    getRewardsSuccess,
  },
});

export const RewardsActions = RewardsSlice.actions;

export default RewardsSlice.reducer;
