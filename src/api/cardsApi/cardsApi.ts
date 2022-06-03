import { instance } from '../instance';

import { endPointCardsCard, endPointCardsGrade } from './constants';
import {
  addCardType,
  CardsGradeResponseType,
  CardType,
  GetCardsGrade,
  GetCardsParamsType,
} from './types';

export const cardsApi = {
  getCards(params: Partial<GetCardsParamsType>) {
    return instance.get(endPointCardsCard, { params: { ...params } });
  },
  addCard: (newCard: addCardType) =>
    instance.post(endPointCardsCard, { card: { ...newCard } }),
  deleteCard: (id: string) => instance.delete(endPointCardsCard, { params: { id } }),
  updateCard: (UpdatedCard: Partial<CardType>) =>
    instance.put(endPointCardsCard, { card: { ...UpdatedCard } }),
  updateCardsGrade: (updatedGrade: Partial<GetCardsGrade>) =>
    instance.put<CardsGradeResponseType>(endPointCardsGrade, updatedGrade),
};
