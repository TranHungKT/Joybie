import { createSlice } from '@reduxjs/toolkit';

import {
  getChallengesRequest,
  getChallengesError,
  getChallengesSuccess,
} from './ChallengesActions';

import { IChallengesState } from './interfaces';

const initialState: IChallengesState = {
  fetchingGetChanllenges: false,
  errorGetChanllenges: null,

  challenges: [],
};

export const ChallengesSlice = createSlice({
  name: 'Challenges',
  initialState,
  reducers: {
    getChallengesRequest,
    getChallengesError,
    getChallengesSuccess,
  },
});

export const ChallengesActions = ChallengesSlice.actions;

export default ChallengesSlice.reducer;
