import {AppRootStateType} from "../../Redux/store";
import {CardType} from "../../api/cardsApi/types";

export const getPackUserIdCardsSelector = (state: AppRootStateType): string => {
    return state.cards.packUserId
}

export const getCardsCardsSelector = (state: AppRootStateType): Array<CardType> => {
    return state.cards.cards
}

export const getPageCardsSelector = (state: AppRootStateType): number => {
    return state.cards.page
}

export const getPageCountCardsSelector = (state: AppRootStateType): number => {
    return state.cards.pageCount
}

export const getCardQuestionCardsSelector = (state: AppRootStateType): string => {
    return state.cards.cardQuestion
}

export const getCardAnswerCardsSelector = (state: AppRootStateType): string => {
    return state.cards.cardAnswer
}

export const getSortCardsCardsSelector = (state: AppRootStateType): string => {
    return state.cards.sortCards
}

export const getCardsTotalCountCardsSelector = (state: AppRootStateType): number => {
    return state.cards.cardsTotalCount
}