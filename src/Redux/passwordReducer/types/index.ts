import {InferActionTypes} from "../../types";
import {passwordAction} from "../passwordAction";

export type  InitialPasswordStateType = {
    isSend: boolean
    email: string
    isChangedPass: boolean
}

export type PasswordActionsType = InferActionTypes<typeof passwordAction>