import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './PackSearch.module.css'
import {useDispatch} from "react-redux";

import {changeCurrentPageCardsAC, setFilterReducerAC} from "../../../Redux/cardsReducer";
import {useParams} from "react-router-dom";
import {EMPTY_STRING} from "../../../constants";
import {ReturnComponentType} from "../../../types";

export const CardsSearch = (): ReturnComponentType => {
    const {packId} = useParams()
    const dispatch = useDispatch()

    let [event, setEvent] = useState<string>(EMPTY_STRING)

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEvent(e.currentTarget.value)

    };

    let BtnHandler = (): void => {
        dispatch(setFilterReducerAC(event));
        dispatch(changeCurrentPageCardsAC(1))
    }

    const onKeyPressBtnHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            BtnHandler()
        }
    }

    return (
        <div className={s.wrap}>
            <input
                type="text"
                placeholder="Search..."
                onKeyPress={onKeyPressBtnHandler}
                value={event}
                onChange={handleChange}
            />
            <button onClick={BtnHandler} className={s.btnSearch}></button>
        </div>
    );
}