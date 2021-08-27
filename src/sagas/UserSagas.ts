import { call, put } from 'redux-saga/effects';

import { UsersActions } from '../redux/User/UsersRedux';

import MockService from '../services/MockService';
import { ResponseTypes } from './interfaces';
import { IGetUsersSuccessPayload } from '../redux/User/interfaces';

const MockAPI = MockService.create();

export function* getUsersSaga() {
  try {
    const response: ResponseTypes<IGetUsersSuccessPayload[]> = yield call<any>(
      MockAPI.getUsersRequest,
    );

    if (response.ok && response.status === 200 && response.data) {
      yield put(UsersActions.getUsersSuccess(response.data));
    } else {
      yield put(UsersActions.getUsersError({ error: 'Can not get users data' }));
    }
  } catch (error) {
    yield put(UsersActions.getUsersError({ error: 'Can not get users data' }));
  }
}
