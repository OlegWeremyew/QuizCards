import React, {ChangeEvent, useState, KeyboardEvent, useEffect} from "react";
import s from './PackSearch.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ReturnComponentType} from "../../../types";
import {EMPTY_STRING} from "../../../constants";
import {cardsPackAction} from "../../../Redux/cardsPackReducer";
import {getPackNameCardsPackSelector} from "../../../selectors";

export const PacksSearch = (): ReturnComponentType => {
    const dispatch = useDispatch()
    const packName = useSelector(getPackNameCardsPackSelector);
    const [event, setEvent] = useState<string>(EMPTY_STRING)

    let handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEvent(e.currentTarget.value)
    };

    useEffect(() => {
        if (packName !== event) setEvent(packName)
    }, [packName])

    let BtnHandler = (): void => {
        dispatch(cardsPackAction.setFilteredPacksAC(event))
        dispatch(cardsPackAction.changeCurrentPageAC(1))
    }

    const onKeyPressBtnHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            BtnHandler()
        }
    }

    return (
        <div className={s.wrap}>
            <input
                onKeyPress={onKeyPressBtnHandler}
                type="text"
                placeholder="Search..."
                value={event}
                onChange={handleChange}
            />
            <button onClick={BtnHandler} className={s.btnSearch}></button>
        </div>
    );
}

