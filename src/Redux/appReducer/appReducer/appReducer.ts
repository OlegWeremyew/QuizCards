import {ActionAppReducerType, InitialAppStateType} from "../types";
import {EMPTY_STRING} from "../../../constants";
import {LOADING, SET_ERROR, SET_ERROR_APP, SET_INITIALIZED} from "../constants";

export const initialAppState = {
    isInitialized: false,
    errorAPP: EMPTY_STRING,
    error: EMPTY_STRING,
    isLoading: false,
}

export const appReducer = (state: InitialAppStateType = initialAppState, action: ActionAppReducerType): InitialAppStateType => {
    switch (action.type) {
        case LOADING:
            return {...state, isLoading: action.payload.value}
        case SET_ERROR_APP:
            return {...state, errorAPP: action.payload.errorAPP}
        case SET_ERROR:
            return {...state, error: action.payload.error}
        case SET_INITIALIZED:
            return {...state, isInitialized: action.payload.isInitialized}
        default:
            return state
    }
};
