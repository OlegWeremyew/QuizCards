import {instance} from "../instance";
import {addCardType, CardsGradeResponseType, CardType, GetCardsGrade, GetCardsParamsType} from "./types";
import {endPointCardsCard, endPointCardsGrade} from "./constants";

export const cardsApi = {
    getCards(params: Partial<GetCardsParamsType>) {
        return instance.get(endPointCardsCard, {params: {...params}});
    },
    addCard: (newCard: addCardType) => {
        return instance.post(endPointCardsCard, {card: {...newCard}})
    },
    deleteCard: (id: string) => {
        return instance.delete(endPointCardsCard, {params: {id: id}})
    },
    updateCard: (UpdatedCard: Partial<CardType>) => {
        return instance.put(endPointCardsCard, {card: {...UpdatedCard}})
    },
    updateCardsGrade: (updatedGrade: Partial<GetCardsGrade>) => {
        return instance.put<CardsGradeResponseType>(endPointCardsGrade, updatedGrade)
    },
}