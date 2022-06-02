import {PacksResponseType} from "../../../api/cardsPackApi";
import {
    CHANGE_CURRENT_PAGE, SET_DEBOUNCING_FLAG,
    SET_FILTERED_PACKS,
    SET_MAX,
    SET_MIN,
    SET_MY_PACKS,
    SET_PACKS_LIST,
    SET_PAGE_COUNT,
    SORT
} from "../constants";

export const cardsPackAction = {
    setPacksListsAC(data: PacksResponseType) {
        return {
            type: SET_PACKS_LIST,
            payload: {
                data,
            },
        } as const
    },
    sortPacksAC(sortPacks: string) {
        return {
            type: SORT,
            payload: {
                sortPacks,
            },
        } as const
    },
    setMyPacksAC(myPacks: boolean) {
        return {
            type: SET_MY_PACKS,
            payload: {
                myPacks,
            },
        } as const
    },
    changeCurrentPageAC(page: number) {
        return {
            type: CHANGE_CURRENT_PAGE,
            payload: {
                page,
            },
        } as const
    },
    setMinAC(min: number) {
        return {
            type: SET_MIN,
            payload: {
                min,
            },
        } as const
    },
    setMaxAC(max: number) {
        return {
            type: SET_MAX,
            payload: {
                max,
            },
        } as const
    },
    setPageCountAC(pageCount: number) {
        return {
            type: SET_PAGE_COUNT,
            payload: {
                pageCount,
            },
        } as const
    },
    setFilteredPacksAC(packName: string) {
        return {
            type: SET_FILTERED_PACKS,
            payload: {
                packName,
            },
        } as const
    },
    setDebouncingFlagAC() {
        return {
            type: SET_DEBOUNCING_FLAG,
        } as const
    },
}