import React from "react";
import s from './DoubleCheckbox.module.css'
import {setMyPacksAC} from "../../../Redux/cardsPackReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/store";
import {ReturnComponentType} from "../../../types";

export const DoubleCheckbox = (): ReturnComponentType => {
    const myPacks = useSelector<AppRootStateType, boolean>(state => state.cardsPack.myPacks);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading)
    const dispatch = useDispatch()


    const myOnClickHandler = (): void => {
        if (!isLoading) {
            if (!myPacks) dispatch(setMyPacksAC(true))
        }
    }


    const allOnClickHandler = (): void => {
        if (!isLoading) {
            if (myPacks) dispatch(setMyPacksAC(false))
        }
    }

    return (
        <div className={s.label}>
            <div onClick={myOnClickHandler} className={myPacks ? s.selected : s.tab}>
                <h5>My</h5>
            </div>
            <div onClick={allOnClickHandler} className={!myPacks ? s.selected : s.tab}>
                <h5>All</h5>
            </div>
        </div>
    )
}