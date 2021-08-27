/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import UsersReducer from './User/UsersRedux';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: UsersReducer,
  },
  middleware:
  (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
