import { CardType } from 'api/cardsApi/types';
import { cardsAction } from 'Redux/cardsReducer';
import { InferActionTypes } from 'Redux/types';

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
