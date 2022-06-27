import { CardType } from 'api/cardsApi/types';
import { AppRootStateType } from 'Redux/store';

export const getPackUserIdCardsSelector = (state: AppRootStateType): string =>
  state.cards.packUserId;

export const getCardsCardsSelector = (state: AppRootStateType): Array<CardType> =>
  state.cards.cards;

export const getPageCardsSelector = (state: AppRootStateType): number => state.cards.page;

export const getPageCountCardsSelector = (state: AppRootStateType): number =>
  state.cards.pageCount;

export const getCardQuestionCardsSelector = (state: AppRootStateType): string =>
  state.cards.cardQuestion;

export const getCardAnswerCardsSelector = (state: AppRootStateType): string =>
  state.cards.cardAnswer;

export const getSortCardsCardsSelector = (state: AppRootStateType): string =>
  state.cards.sortCards;

export const getCardsTotalCountCardsSelector = (state: AppRootStateType): number =>
  state.cards.cardsTotalCount;
