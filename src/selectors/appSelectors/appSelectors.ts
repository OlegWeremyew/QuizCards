import {AppRootStateType} from "../../Redux/store";

export const getInitializedAppSelector = (state: AppRootStateType): boolean => {
    return state.app.isInitialized
}

export const getIsLoadingAppSelector = (state: AppRootStateType): boolean => {
    return state.app.isLoading
}

export const getErrorAppSelector = (state: AppRootStateType): string => {
    return state.app.error
}