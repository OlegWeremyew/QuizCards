import { AppRootStateType } from 'Redux/store';

export const getIsRegisteredRegisterSelector = (state: AppRootStateType): boolean =>
  state.register.isRegistered;
