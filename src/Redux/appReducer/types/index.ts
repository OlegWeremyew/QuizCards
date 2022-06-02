import {AppAction} from "../appAction";
import {InferActionTypes} from "../../types";

export type InitialAppStateType = {
    isInitialized: boolean
    errorAPP: string
    error: string
    isLoading: boolean
}

export type ActionAppReducerType = InferActionTypes<typeof AppAction>