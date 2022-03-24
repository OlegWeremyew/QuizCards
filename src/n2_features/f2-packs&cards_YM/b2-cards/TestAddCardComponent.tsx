import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import s from "./../b1-packs/AddPackComponent.module.css"
import {addNewCardTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkCards";
import {Undetectable} from "../../../types/Undetectable";
import {cardsActions} from "../../../n1_main/m2-bll/r2-actions/ActionsCards";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";

type TestAddCardComponentType = {
    packId: Undetectable<string>
}

const TestAddCardComponent = ({packId}: TestAddCardComponentType) => {

    const dispatch = useDispatch()
    const isLoad = useFridaySelector<boolean>(state => state.app.isLoad)
    const [question, setQuestion] = useState<string>('')
    const [answer, setAnswer] = useState<string>('')

    const addNewCard = () => {
        if (packId) {
            dispatch(addNewCardTC(question, answer, packId))
            dispatch(cardsActions.cardModeAC(null))
        }
    }

    const turnBack = () => {
        dispatch(cardsActions.cardModeAC(null))
    }

    return (
        <div className={s.addItemContainer}>
            <h2>
                Add new card:
            </h2>
            <div className={s.centerInputContainer}>
                <span>
                    Question: <span>&nbsp; ✎</span>
                </span>
                <input disabled={isLoad}
                       type="text"
                       value={question}
                       onChange={(e) => setQuestion(e.currentTarget.value)}
                />
            </div>
            <div className={s.centerInputContainer}>
                <span>
                    Answer: <span>&nbsp; ✎</span>
                </span>
                <input disabled={isLoad}
                       type="text"
                       value={answer}
                       onChange={(e) => setAnswer(e.currentTarget.value)}
                />
            </div>
            <div className={s.buttonsContainer}>
                <button onClick={turnBack} disabled={isLoad}>Cancel</button>
                <button onClick={addNewCard} disabled={isLoad}>Add</button>
            </div>
        </div>
    )
}

export default TestAddCardComponent
