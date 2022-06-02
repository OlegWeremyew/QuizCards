import {AppRootStateType} from "../../Redux/store";

export const getStatusLoginSelector = (state: AppRootStateType): boolean => {
    return state.login.status
}