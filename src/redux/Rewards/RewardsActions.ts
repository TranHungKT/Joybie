import {
  IRewardsReducer,
  IGetRewardsSuccessPayload,
  IGetRewardsErrorPayload,
} from './interfaces';

export const getRewardsRequest: IRewardsReducer<undefined> = (state) => {
  state.fetchingGetRewards = true;
  state.errorGetRewards = null;
};

export const getRewardsSuccess: IRewardsReducer<IGetRewardsSuccessPayload[]> = (
  state,
  action,
) => {
  const rewards = action.payload;

  state.rewards = rewards;
  state.fetchingGetRewards = false;
  state.errorGetRewards = null;
};

export const getRewardsError: IRewardsReducer<IGetRewardsErrorPayload> = (
  state,
  action,
) => {
  state.fetchingGetRewards = false;
  state.errorGetRewards = action.payload.error;
  state.rewards = [];
};
