import { AppRootStateType } from 'Redux/store';
import { Undetectable } from 'types';

export const get_idProfileSelector = (state: AppRootStateType): string =>
  state.profilePage._id;

export const getNameProfileSelector = (state: AppRootStateType): string =>
  state.profilePage.name;

export const getAvatarProfileSelector = (state: AppRootStateType): string =>
  state.profilePage.avatar;

export const getEmailProfileSelector = (state: AppRootStateType): string =>
  state.profilePage.email;

export const getPublicCardPacksCountProfileSelector = (state: AppRootStateType): number =>
  state.profilePage.publicCardPacksCount;

export const getErrorProfileSelector = (state: AppRootStateType): Undetectable<string> =>
  state.profilePage.error;
