/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import UsersReducer from './User/UsersRedux';
import ChallengesReducer from './Challenges/ChallengesRedux';
import RewardsReducer from './Rewards/RewardsRedux';
import VideosReducer from './Videos/VideosRedux';

import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: UsersReducer,
    challenges: ChallengesReducer,
    rewards: RewardsReducer,
    videos: VideosReducer,
  },
  middleware:
  (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
sagaMiddleware.run(rootSaga);
export default store;
