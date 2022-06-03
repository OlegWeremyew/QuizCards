import { AppRootStateType } from '../../Redux/store';

export const getEmailPasswordSelector = (state: AppRootStateType): string =>
  state.recovery.email;

export const getIsSendPasswordSelector = (state: AppRootStateType): boolean =>
  state.recovery.isSend;

export const getIsChangedPassPasswordSelector = (state: AppRootStateType): boolean =>
  state.recovery.isChangedPass;
