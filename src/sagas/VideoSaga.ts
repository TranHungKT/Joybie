import { call, put } from 'redux-saga/effects';

import { VideosActions } from '../redux/Videos/VideosRedux';

import MockService from '../services/MockService';
import { ResponseTypes } from './interfaces';
import { IGetVideosSuccessPayload } from '../redux/Videos/interfaces';

const MockAPI = MockService.create();

export function* getVideosSaga() {
  try {
    const response: ResponseTypes<IGetVideosSuccessPayload[]> = yield call<any>(
      MockAPI.getChallengesRequest,
    );

    if (response.ok && response.status === 200 && response.data) {
      yield put(VideosActions.getVideosSuccess(response.data));
    } else {
      yield put(
        VideosActions.getVideosError({
          error: 'Can not get challenges data',
        }),
      );
    }
  } catch (error) {
    yield put(
      VideosActions.getVideosError({
        error: 'Can not get chagllenges data',
      }),
    );
  }
}
