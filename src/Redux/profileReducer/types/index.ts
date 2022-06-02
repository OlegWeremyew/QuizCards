import {profileAction} from "../profileAction";
import {InferActionTypes} from "../../types";

export type ProfileActionsType = InferActionTypes<typeof profileAction>