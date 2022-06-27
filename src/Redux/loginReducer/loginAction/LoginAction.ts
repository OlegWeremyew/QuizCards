import { SET_IS_LOGGED_IN } from 'Redux/loginReducer/constants';

export const LoginAction = {
  setIsLoggedInAC(status: boolean) {
    return {
      type: SET_IS_LOGGED_IN,
      payload: {
        status,
      },
    } as const;
  },
};
