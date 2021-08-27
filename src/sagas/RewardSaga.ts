import { call, put } from 'redux-saga/effects';

import { RewardsActions } from '../redux/Rewards/RewardsRedux';

import MockService from '../services/MockService';
import { ResponseTypes } from './interfaces';
import { IGetRewardsSuccessPayload } from '../redux/Rewards/interfaces';

const MockAPI = MockService.create();

export function* getRewardsSaga() {
  try {
    const response: ResponseTypes<IGetRewardsSuccessPayload[]> = yield call<any>(MockAPI.getRewardsRequest);

    if (response.ok && response.status === 200 && response.data) {
      yield put(RewardsActions.getRewardsSuccess(response.data));
    } else {
      yield put(
        RewardsActions.getRewardsError({
          error: 'Can not get rewards data',
        }),
      );
    }
  } catch (error) {
    yield put(
      RewardsActions.getRewardsError({
        error: 'Can not get rewards data',
      }),
    );
  }
}
