import {packsActions, packsActionsEnum, packsActionsTypes} from "./ActionsPacks";
import {UpdatedType} from "./packsAPI";

export type PacksType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    created: string
    updated: string
}
export type InitialCardPacksType = {
    cardPacks: PacksType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    packName: string
    updated: UpdatedType
    user_id: string
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
        }
    ],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 0,
    pageCount: 0,
    packName: '',
    updated: '0updated',
    user_id: ''
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
        case packsActionsEnum.CARDS_PER_PAGE : {
            return {...state, cardPacksTotalCount: action.payload.cardsPage}
        }
        default:
            return state
    }
}