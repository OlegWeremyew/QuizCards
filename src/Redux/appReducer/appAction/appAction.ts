import {LOADING, SET_ERROR, SET_ERROR_APP, SET_INITIALIZED} from "../constants";

export const AppAction = {
    setLoadingAC(value: boolean) {
        return {
            type: LOADING,
            payload: {
                value,
            },
        } as const
    },
    setIsInitializedAC(isInitialized: boolean) {
        return {
            type: SET_INITIALIZED,
            payload: {
                isInitialized,
            },
        } as const
    },
    setErrorAC(error: string) {
        return {
            type: SET_ERROR,
            payload: {
                error,
            },
        } as const
    },
    setErrorAPPAC(errorAPP: string) {
        return {
            type: SET_ERROR_APP,
            payload: {
                errorAPP,
            },
        } as const
    },
}

