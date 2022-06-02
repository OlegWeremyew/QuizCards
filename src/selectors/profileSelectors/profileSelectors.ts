import {AppRootStateType} from "../../Redux/store";
import {Undetectable} from "../../types";

export const get_idProfileSelector = (state: AppRootStateType): string => {
    return state.profilePage._id
}

export const getNameProfileSelector = (state: AppRootStateType): string => {
    return state.profilePage.name
}

export const getAvatarProfileSelector = (state: AppRootStateType): string => {
    return state.profilePage.avatar
}

export const getEmailProfileSelector = (state: AppRootStateType): string => {
    return state.profilePage.email
}

export const getPublicCardPacksCountProfileSelector = (state: AppRootStateType): number => {
    return state.profilePage.publicCardPacksCount
}

export const getErrorProfileSelector = (state: AppRootStateType): Undetectable<string> => {
    return state.profilePage.error
}