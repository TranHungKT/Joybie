import {
  IUsersReducer,
  IGetUsersSuccessPayload,
  IGetUsersErrorPaylaod,
} from './interfaces';

export const getUsersRequest: IUsersReducer<undefined> = (state) => {
  state.fetchingGetUsers = true;
  state.errorGetUsers = null;
};

export const getUsersSuccess: IUsersReducer<IGetUsersSuccessPayload[]> = (
  state,
  action,
) => {
  const users = action.payload;

  state.users = users;
  state.fetchingGetUsers = false;
  state.errorGetUsers = null;
};

export const getUsersError: IUsersReducer<IGetUsersErrorPaylaod> = (
  state,
  action,
) => {
  state.fetchingGetUsers = false;
  state.errorGetUsers = action.payload.error;
  state.users = [];
};
