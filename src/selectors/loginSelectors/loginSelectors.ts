import { AppRootStateType } from 'Redux/store';

export const getStatusLoginSelector = (state: AppRootStateType): boolean =>
  state.login.status;
