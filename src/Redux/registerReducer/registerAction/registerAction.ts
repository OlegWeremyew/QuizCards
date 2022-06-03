import { SET_REGISTER } from '../constants';

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
