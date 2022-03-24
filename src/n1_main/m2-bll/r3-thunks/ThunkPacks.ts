import {setAppStatusAC, setGlobalErrorAC, setIsLoadAC} from "../r1-reducers/app-reducer";
import {newPackType, packsAPI} from "../../m3-dal/packsAPI";
import {fridayReducerType, FridayThunkType} from "../store";
import {Dispatch} from "redux";
import {packsActions} from "../r2-actions/ActionsPacks";

export const packsTC = () => async (dispatch: Dispatch, getState: () => fridayReducerType) => {
    const {packName, minCardsCount, maxCardsCount, updated, page, pageCount, user_id} = getState().packs
    dispatch(setAppStatusAC("loading"))
    dispatch(setIsLoadAC(true))
    try {
        let res = await packsAPI.setPacks(packName, minCardsCount, maxCardsCount, updated, page, pageCount, user_id)
        dispatch(packsActions.setPacksAC(res.data))
        dispatch(setAppStatusAC("succeeded"))
    } catch (e: any) {
        dispatch(setGlobalErrorAC(e.response ? e.response.data.error : 'some error'))
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
        dispatch(setIsLoadAC(false))
    }
}

export const addNewPacksTC = (newPack: newPackType): FridayThunkType => async (dispatch: any) => {
    dispatch(setAppStatusAC("loading"))
    dispatch(setIsLoadAC(true))
    try {
        await packsAPI.addNewPack(newPack)
        dispatch(packsTC())
    } catch (e: any) {
        dispatch(setGlobalErrorAC(e.response ? e.response.data.error : 'some error'))
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
        dispatch(setIsLoadAC(false))
    }
}

export const deletePacksTC = (id: string): FridayThunkType => async (dispatch: any) => {
    dispatch(setAppStatusAC("loading"))
    dispatch(setIsLoadAC(true))
    try {
        await packsAPI.deletePack(id)
        dispatch(packsTC())
    } catch (e: any) {
        dispatch(setGlobalErrorAC(e.response ? e.response.data.error : 'some error'))
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
        dispatch(setIsLoadAC(false))
    }
}

export const changePacksTC = (newName: string, id: string): FridayThunkType => async (dispatch: any) => {
    dispatch(setAppStatusAC("loading"))
    dispatch(setIsLoadAC(true))
    try {
        await packsAPI.changePack(newName, id)
        dispatch(packsTC())
    } catch (e: any) {
        dispatch(setGlobalErrorAC(e.response ? e.response.data.error : 'some error'))
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
        dispatch(setIsLoadAC(false))
    }
}