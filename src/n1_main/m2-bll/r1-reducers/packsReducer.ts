import {packsActions, packsActionsEnum, packsActionsTypes} from "../r2-actions/ActionsPacks";
import {UpdatedType} from "../../m3-dal/packsAPI";
import {Nullable} from "../../../types/Nullable";

export type PackType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    created: string
    updated: string
    user_name: string
}

export type InitialCardPacksType = {
    cardPacks: PackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    packName: string
    updated: UpdatedType
    user_id: Nullable<string>
}

const initialCardPacks: InitialCardPacksType = {
    cardPacks: [
        {
            _id: "",
            user_id: "",
            name: "",
            cardsCount: 0,
            created: "",
            updated: "",
            user_name: "",
        }
    ],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 10,
    packName: '',
    updated: '' as UpdatedType,
    user_id: null,
}

export type packsReducerActionType = ReturnType<packsActionsTypes<typeof packsActions>>

export const packsReducer = (state = initialCardPacks, action: packsReducerActionType): InitialCardPacksType => {
    switch (action.type) {
        case packsActionsEnum.SET_PACKS: {
            return {...state, cardPacks: action.payload.state.cardPacks}
        }
        case packsActionsEnum.ALL_MY: {
            return {...state, user_id: action.payload.value}
        }
        case packsActionsEnum.MIN: {
            return {...state, minCardsCount: action.payload.min}
        }
        case packsActionsEnum.MAX : {
            return {...state, maxCardsCount: action.payload.max}
        }
        case packsActionsEnum.SEARCH : {
            return {...state, packName: action.payload.packName}
        }
        case packsActionsEnum.PAGE : {
            return {...state, page: action.payload.page}
        }
        case packsActionsEnum.PAGE_PACKS_COUNT : {
            return {...state, pageCount: action.payload.pageCount}
        }
        case packsActionsEnum.PACKS_UPDATED : {
            return {...state, updated: action.payload.updated}
        }
        default:
            return state
    }
}