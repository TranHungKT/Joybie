import { createSlice } from '@reduxjs/toolkit';

import { IUsersState } from './interfaces';
import { getUsersError, getUsersRequest, getUsersSuccess } from './UserActions';

const initialState: IUsersState = {
  fetchingGetUsers: false,
  errorGetUsers: null,

  users: [],
};

export const UsersSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    getUsersError,
    getUsersRequest,
    getUsersSuccess,
  },
});

export const UsersActions = UsersSlice.actions;

export default UsersSlice.reducer;
