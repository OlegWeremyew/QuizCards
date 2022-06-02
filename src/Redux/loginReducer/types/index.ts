import {LoginAction} from "../loginAction";
import {InferActionTypes} from "../../types";

export type initialStateLoginType = {
    status: boolean
}

export type AuthActionsType = InferActionTypes<typeof LoginAction>