import {AppRootStateType} from "../../Redux/store";

export const getEmailPasswordSelector = (state: AppRootStateType): string => {
    return state.recovery.email
}

export const getIsSendPasswordSelector = (state: AppRootStateType): boolean => {
    return state.recovery.isSend
}

export const getIsChangedPassPasswordSelector = (state: AppRootStateType): boolean => {
    return state.recovery.isChangedPass
}