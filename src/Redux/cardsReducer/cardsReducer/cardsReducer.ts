import {EMPTY_ARRAY, EMPTY_STRING} from "../../../constants";
import {CardsActionsType, InitialCardStateType} from "../types";
import {
    CHANGE_CURRENT_PAGE,
    CLEAR_CARDS,
    SET_CARD, SET_CARDS_GRADE,
    SET_FILTER_CARDS,
    SET_PAGE_COUNT_CARDS,
    SORT_CARDS
} from "../constants";

const initialCardState = {
    cards: EMPTY_ARRAY,
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 1,
    pageCount: 8,
    searchCard: EMPTY_STRING,
    sortCards: '0updated',
    packUserId: EMPTY_STRING,
    token: EMPTY_STRING,
    tokenDeathTime: 0,
    cardAnswer: EMPTY_STRING,
    cardQuestion: EMPTY_STRING,
    grade: 0,
}

export const cardsReducer = (state: InitialCardStateType = initialCardState, action: CardsActionsType): InitialCardStateType => {
    switch (action.type) {
        case SET_CARD:
            return {...state, ...action.payload.data};
        case CLEAR_CARDS:
            return initialCardState
        case CHANGE_CURRENT_PAGE:
            return {...state, page: action.payload.page}
        case SORT_CARDS:
            return {...state, sortCards: action.sortCards, page: 1}
        case SET_FILTER_CARDS:
            return {...state, cardQuestion: action.payload.cardQuestion}
        case SET_PAGE_COUNT_CARDS:
            return {...state, pageCount: action.payload.pageCount}
        case SET_CARDS_GRADE:
            return {
                ...state, cards: state.cards.map(m => m._id === action.payload.updatedGrade.card_id
                    ? {...m, shots: action.payload.updatedGrade.shots, grade: action.payload.updatedGrade.grade}
                    : m)
            }
        default:
            return state
    }
};