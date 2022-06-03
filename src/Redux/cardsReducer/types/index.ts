import { CardType } from '../../../api/cardsApi/types';
import { InferActionTypes } from '../../types';
import { cardsAction } from '../cardsAction';

export type InitialCardStateType = {
  cards: Array<CardType>;
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  searchCard: string;
  sortCards: string;
  packUserId: string;
  token: string;
  tokenDeathTime: number;
  cardAnswer: string;
  cardQuestion: string;
  grade: number;
};

export type CardsActionsType = InferActionTypes<typeof cardsAction>;
