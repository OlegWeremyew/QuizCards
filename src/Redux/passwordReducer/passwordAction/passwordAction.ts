import { SEND_EMAIL, SET_IS_CHANGED_PASSWORD } from 'Redux/passwordReducer/constants';

export const passwordAction = {
  passwordForgotAC(isSend: boolean, email: string) {
    return {
      type: SEND_EMAIL,
      payload: {
        isSend,
        email,
      },
    } as const;
  },
  setIsChangedPassAC(isChangedPass: boolean) {
    return {
      type: SET_IS_CHANGED_PASSWORD,
      payload: {
        isChangedPass,
      },
    } as const;
  },
};
