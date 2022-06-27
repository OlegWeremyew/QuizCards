import { AppRootStateType } from 'Redux/store';

export const getInitializedAppSelector = (state: AppRootStateType): boolean =>
  state.app.isInitialized;

export const getIsLoadingAppSelector = (state: AppRootStateType): boolean =>
  state.app.isLoading;

export const getErrorAppSelector = (state: AppRootStateType): string => state.app.error;
