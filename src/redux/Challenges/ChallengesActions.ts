import {
  IChallengesReducer,
  IGetChallengesSuccessPayload,
  IGetChallengesErrorPayload,
} from './interfaces';

export const getChallengesRequest: IChallengesReducer<undefined> = (state) => {
  state.fetchingGetChanllenges = true;
  state.errorGetChanllenges = null;
};

export const getChallengesSuccess: IChallengesReducer<
IGetChallengesSuccessPayload[]
> = (state, action) => {
  const challenges = action.payload;

  state.challenges = challenges;
  state.fetchingGetChanllenges = false;
  state.errorGetChanllenges = null;
};

export const getChallengesError: IChallengesReducer<IGetChallengesErrorPayload> = (state, action) => {
  state.fetchingGetChanllenges = false;
  state.errorGetChanllenges = action.payload.error;
  state.challenges = [];
};
