import {registerAction} from "../registerAction";
import {InferActionTypes} from "../../types";

export type InitialRegisterStateType = {
    isRegistered: boolean
}

export type RegisterActionsType = InferActionTypes<typeof registerAction>