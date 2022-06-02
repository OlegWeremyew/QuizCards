import {AppRootStateType} from "../../Redux/store";

export const getIsRegisteredRegisterSelector = (state: AppRootStateType): boolean => {
    return state.register.isRegistered
}