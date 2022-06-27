import { SET_REGISTER } from 'Redux/registerReducer/constants';

export const registerAction = {
  setRegister(isRegistered: boolean) {
    return {
      type: SET_REGISTER,
      payload: {
        isRegistered,
      },
    } as const;
  },
};
