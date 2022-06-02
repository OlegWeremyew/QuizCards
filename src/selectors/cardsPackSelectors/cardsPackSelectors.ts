import {AppRootStateType} from "../../Redux/store";
import {PackType} from "../../api/cardsPackApi/types";

export const getPackNameCardsPackSelector = (state: AppRootStateType): string => {
    return state.cardsPack.packName
}

export const getDebouncingFlagCardsPackSelector = (state: AppRootStateType): object => {
    return state.cardsPack.debouncingFlag
}

export const getPageCardsPackSelector = (state: AppRootStateType): number => {
    return state.cardsPack.page
}

export const getPageCountCardsPackSelector = (state: AppRootStateType): number => {
    return state.cardsPack.pageCount
}

export const getMyPacksCardsPackSelector = (state: AppRootStateType): boolean => {
    return state.cardsPack.myPacks
}

export const getSortPacksCardsPackSelector = (state: AppRootStateType): string => {
    return state.cardsPack.sortPacks
}

export const getCardPacksTotalCountCardsPackSelector = (state: AppRootStateType): number => {
    return state.cardsPack.cardPacksTotalCount
}

export const getCardPacksCountCardsPackSelector = (state: AppRootStateType): Array<PackType> => {
    return state.cardsPack.cardPacks
}

export const getMaxCardsCountCardsPackSelector = (state: AppRootStateType): number => {
    return state.cardsPack.maxCardsCount
}

export const getMaxCardsPackSelector = (state: AppRootStateType): number => {
    return state.cardsPack.max
}

export const getMinCardsPackSelector = (state: AppRootStateType): number => {
    return state.cardsPack.min
}