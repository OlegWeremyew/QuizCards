import {EMPTY_ARRAY, EMPTY_OBJECT, EMPTY_STRING} from "../../../constants";
import {CardsPackActionReducerType, InitialCardsPackStateType} from "../types";
import {
    CHANGE_CURRENT_PAGE, SET_DEBOUNCING_FLAG,
    SET_FILTERED_PACKS,
    SET_MAX,
    SET_MIN,
    SET_MY_PACKS,
    SET_PACKS_LIST,
    SET_PAGE_COUNT,
    SORT
} from "../constants";

const initialCardsPackState = {
    cardPacks: EMPTY_ARRAY,
    cardPacksTotalCount: 0,
    minCardsCount: 0,
    maxCardsCount: 0,
    page: 1,
    pageCount: 8,
    myPacks: false,
    sortPacks: "0updated",
    min: 0,
    max: 0,
    packName: EMPTY_STRING,
    user_id: EMPTY_STRING,
    debouncingFlag: EMPTY_OBJECT,
}

export const cardsPackReducer = (state: InitialCardsPackStateType = initialCardsPackState, action: CardsPackActionReducerType): InitialCardsPackStateType => {
    switch (action.type) {
        case SET_PACKS_LIST:
            return {...state, ...action.payload.data}
        case SORT:
            return {...state, sortPacks: action.payload.sortPacks, page: 1}
        case SET_MY_PACKS:
            return {
                ...state,
                myPacks: action.payload.myPacks,
                min: 0,
                max: 0,
                packName: EMPTY_STRING
            }
        case CHANGE_CURRENT_PAGE:
            return {...state, page: action.payload.page}
        case SET_MIN:
            return {...state, min: action.payload.min}
        case SET_MAX:
            return {...state, max: action.payload.max}
        case SET_PAGE_COUNT:
            return {...state, pageCount: action.payload.pageCount, page: 1}
        case SET_FILTERED_PACKS:
            return {...state, packName: action.payload.packName}
        case SET_DEBOUNCING_FLAG:
            return {...state, debouncingFlag: EMPTY_OBJECT, page: 1}
        default:
            return state
    }
};

