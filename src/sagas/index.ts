import { all, takeLatest } from 'redux-saga/effects';

import { UsersActions } from '../redux/User/UsersRedux';
import { ChallengesActions } from '../redux/Challenges/ChallengesRedux';

import { getUsersSaga } from './UserSagas';
import { getChallengesSaga } from './ChallengeSaga';

export default function* rootSaga() {
  yield all([
    takeLatest(UsersActions.getUsersRequest, getUsersSaga),
    takeLatest(ChallengesActions.getChallengesRequest, getChallengesSaga),
  ]);
}
