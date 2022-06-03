import { PackType } from '../../api/cardsPackApi/types';
import { AppRootStateType } from '../../Redux/store';

export const getPackNameCardsPackSelector = (state: AppRootStateType): string =>
  state.cardsPack.packName;

export const getDebouncingFlagCardsPackSelector = (state: AppRootStateType): object =>
  state.cardsPack.debouncingFlag;

export const getPageCardsPackSelector = (state: AppRootStateType): number =>
  state.cardsPack.page;

export const getPageCountCardsPackSelector = (state: AppRootStateType): number =>
  state.cardsPack.pageCount;

export const getMyPacksCardsPackSelector = (state: AppRootStateType): boolean =>
  state.cardsPack.myPacks;

export const getSortPacksCardsPackSelector = (state: AppRootStateType): string =>
  state.cardsPack.sortPacks;

export const getCardPacksTotalCountCardsPackSelector = (
  state: AppRootStateType,
): number => state.cardsPack.cardPacksTotalCount;

export const getCardPacksCountCardsPackSelector = (
  state: AppRootStateType,
): Array<PackType> => state.cardsPack.cardPacks;

export const getMaxCardsCountCardsPackSelector = (state: AppRootStateType): number =>
  state.cardsPack.maxCardsCount;

export const getMaxCardsPackSelector = (state: AppRootStateType): number =>
  state.cardsPack.max;

export const getMinCardsPackSelector = (state: AppRootStateType): number =>
  state.cardsPack.min;
