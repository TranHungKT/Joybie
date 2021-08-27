import { call, put } from 'redux-saga/effects';

import { ChallengesActions } from '../redux/Challenges/ChallengesRedux';

import MockService from '../services/MockService';
import { ResponseTypes } from './interfaces';
import { IGetChallengesSuccessPayload } from '../redux/Challenges/interfaces';

const MockAPI = MockService.create();

export function* getChallengesSaga() {
  try {
    const response: ResponseTypes<IGetChallengesSuccessPayload[]> = yield call<any>(MockAPI.getChallengesRequest);

    if (response.ok && response.status === 200 && response.data) {
      yield put(ChallengesActions.getChallengesSuccess(response.data));
    } else {
      yield put(
        ChallengesActions.getChallengesError({
          error: 'Can not get challenges data',
        }),
      );
    }
  } catch (error) {
    yield put(
      ChallengesActions.getChallengesError({
        error: 'Can not get challenges data',
      }),
    );
  }
}
