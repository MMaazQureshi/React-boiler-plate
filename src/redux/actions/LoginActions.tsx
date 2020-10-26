export enum LoginActionTypes {
  UPDATE_LAST_LOGIN_ACTION = 'UPDATE_LAST_LOGIN_ACTION',
  LOGIN_COMPLETED_ACTION = 'LOGIN_COMPLETED_ACTION',
  GET_NEW_MESSAGES = 'GET_NEW_MESSAGES',
}

export interface UpdateLastLoginPatchRequestAction {
  token: string;
  type: LoginActionTypes.UPDATE_LAST_LOGIN_ACTION;
  userId: string;
  suppressError: boolean;
}
