import React from "react";
import s from './DoubleCheckbox.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ReturnComponentType} from "../../../types";
import {cardsPackAction} from "../../../Redux/cardsPackReducer";
import {getIsLoadingAppSelector, getMyPacksCardsPackSelector} from "../../../selectors";

export const DoubleCheckbox = (): ReturnComponentType => {
    const myPacks = useSelector(getMyPacksCardsPackSelector);
    const isLoading = useSelector(getIsLoadingAppSelector)
    const dispatch = useDispatch()


    const myOnClickHandler = (): void => {
        if (!isLoading) {
            if (!myPacks) dispatch(cardsPackAction.setMyPacksAC(true))
        }
    }

    const allOnClickHandler = (): void => {
        if (!isLoading) {
            if (myPacks) dispatch(cardsPackAction.setMyPacksAC(false))
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