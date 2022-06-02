import {InitialCardStateType} from "../types";
import {
    CHANGE_CURRENT_PAGE,
    CLEAR_CARDS,
    SET_CARD, SET_CARDS_GRADE,
    SET_FILTER_CARDS,
    SET_PAGE_COUNT_CARDS,
    SORT_CARDS
} from "../constants";
import {updatedGradeType} from "../../../api/cardsApi/types";

export const cardsAction = {
    setCardsAC(data: InitialCardStateType){
        return {
            type: SET_CARD,
            payload: {
                data,
            },
        } as const;
    },
    clearCardsAC(){
        return {
            type: CLEAR_CARDS,
        } as const;
    },
    changeCurrentPageCardsAC(page: number){
        return {
            type: CHANGE_CURRENT_PAGE,
            payload: {
                page,
            },
        } as const
    },
    sortCardsAC(sortCards: string){
        return {
            type: SORT_CARDS,
            sortCards
        } as const
    },
    setFilterReducerAC(cardQuestion: string){
        return {
            type: SET_FILTER_CARDS,
            payload: {
                cardQuestion,
            },
        } as const;
    },
    setPageCountCardsAC(pageCount: number) {
        return {
            type: SET_PAGE_COUNT_CARDS,
            payload: {
                pageCount,
            },
        } as const
    },
    setCardsGradeAC(updatedGrade: updatedGradeType){
        return {
            type: SET_CARDS_GRADE,
            payload: {
                updatedGrade,
            },
        } as const
    },
}