import {PackType} from "../../../api/cardsPackApi";
import {cardsPackAction} from "../cardsPackAction";
import {InferActionTypes} from "../../types";

export type InitialCardsPackStateType = {
    cardPacks: Array<PackType>
    page: number
    pageCount: number
    cardPacksTotalCount: number
    minCardsCount: number
    maxCardsCount: number
    myPacks: boolean
    sortPacks: string
    min: number
    max: number
    packName: string
    user_id: string
    debouncingFlag: object
}

export type CardsPackActionReducerType = InferActionTypes<typeof cardsPackAction>