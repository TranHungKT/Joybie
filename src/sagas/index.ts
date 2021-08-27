import { all, takeLatest } from 'redux-saga/effects';

import { UsersActions } from '../redux/User/UsersRedux';
import { ChallengesActions } from '../redux/Challenges/ChallengesRedux';
import { RewardsActions } from '../redux/Rewards/RewardsRedux';
import { VideosActions } from '../redux/Videos/VideosRedux';

import { getUsersSaga } from './UserSagas';
import { getChallengesSaga } from './ChallengeSaga';
import { getRewardsSaga } from './RewardSaga';
import { getVideosSaga } from './VideoSaga';

export default function* rootSaga() {
  yield all([
    takeLatest(UsersActions.getUsersRequest, getUsersSaga),
    takeLatest(ChallengesActions.getChallengesRequest, getChallengesSaga),
    takeLatest(RewardsActions.getRewardsRequest, getRewardsSaga),
    takeLatest(VideosActions.getVideosRequest, getVideosSaga),
  ]);
}
