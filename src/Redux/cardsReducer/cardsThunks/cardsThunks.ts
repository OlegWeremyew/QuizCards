import {Dispatch} from "redux";
import {AppRootStateType} from "../../store";
import {AppAction} from "../../appReducer";
import {EMPTY_STRING} from "../../../constants";
import {cardsAction} from "../cardsAction";
import {GetCardsGrade, GetCardsParamsType} from "../../../api/cardsApi/types";
import {cardsApi} from "../../../api";

export const fetchCardsTC = (packUserId: string) =>
    (dispatch: Dispatch, getState: () => AppRootStateType) => {
        dispatch(AppAction.setLoadingAC(true))
        const {sortCards, cardAnswer, cardQuestion, page, pageCount} = getState().cards
        const data: GetCardsParamsType = {
            cardAnswer: cardAnswer,
            cardQuestion: cardQuestion,
            cardsPack_id: packUserId,
            min: 0,
            max: 0,
            sortCards: sortCards,
            page: page,
            pageCount: pageCount,
        }
        cardsApi.getCards(data)
            .then((res) => {
                dispatch(cardsAction.setCardsAC(res.data));
            })
            .catch(e => {
                const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
                dispatch(AppAction.setErrorAC(error))
            })
            .finally(() => {
                dispatch(AppAction.setLoadingAC(false));
            })
    };

export const learnCardsTC = (packUserId: string) =>
    (dispatch: Dispatch) => {
        dispatch(AppAction.setLoadingAC(true))
        const data: GetCardsParamsType = {
            cardAnswer: EMPTY_STRING,
            cardQuestion: EMPTY_STRING,
            cardsPack_id: packUserId,
            min: 0,
            max: 0,
            sortCards: "0question",
            page: 1,
            pageCount: 1000,
        }
        cardsApi.getCards(data)
            .then((res) => {
                dispatch(cardsAction.setCardsAC(res.data));
            })
            .catch(e => {
                const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
                dispatch(AppAction.setErrorAC(error))
            })
            .finally(() => {
                dispatch(AppAction.setLoadingAC(false));
            })
    };

export const CardsGradeTC = (cardId: string, grade: number) =>
    (dispatch: Dispatch) => {
        dispatch(AppAction.setLoadingAC(true))
        const data: GetCardsGrade = {
            grade: grade,
            card_id: cardId
        }
        cardsApi.updateCardsGrade(data)
            .then((res) => {
                console.log(res.data)
                dispatch(cardsAction.setCardsGradeAC(res.data.updatedGrade));
            })
            .catch(e => {
                const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
                dispatch(AppAction.setErrorAC(error))
            })
            .finally(() => {
                dispatch(AppAction.setLoadingAC(false));
            })
    };


export const addCardTC = (packUserId: string, question: string, answer: string): any => {
    return (dispatch: any) => {
        dispatch(AppAction.setLoadingAC(true))
        dispatch(cardsAction.sortCardsAC('0updated'))

        const payload = {
            cardsPack_id: packUserId,
            question: question,
            answer: answer,
            grade: 0,
            shots: 0,
            answerImg: EMPTY_STRING,
            questionImg: EMPTY_STRING,
            questionVideo: EMPTY_STRING,
            answerVideo: EMPTY_STRING,
        }
        cardsApi.addCard(payload)
            .then(() => {
                dispatch(fetchCardsTC(packUserId))
            })
            .catch(e => {
                const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
                dispatch(AppAction.setErrorAC(error))
                dispatch(AppAction.setLoadingAC(false));
            })
    }
}

export const deleteCardTC = (packUserId: string, cardId: string): any => {
    return (dispatch: any) => {
        dispatch(AppAction.setLoadingAC(true))

        cardsApi.deleteCard(cardId)
            .then(() => {
                dispatch(fetchCardsTC(packUserId))
            })
            .catch(e => {
                const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
                dispatch(AppAction.setErrorAC(error))
                dispatch(AppAction.setLoadingAC(false));
            })
    }
}


export const updateCardTC = (packUserId: string, cardId: string, question: string, answer: string): any => {
    return (dispatch: any) => {
        dispatch(AppAction.setLoadingAC(true))

        const payload = {
            _id: cardId,
            cardsPack_id: packUserId,
            question: question,
            answer: answer
        }

        cardsApi.updateCard(payload)
            .then(() => {
                dispatch(fetchCardsTC(packUserId))
            })
            .catch(e => {
                const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
                dispatch(AppAction.setErrorAC(error))
                dispatch(AppAction.setLoadingAC(false));
            })
    }
}