import React from 'react';
import styles from './CardsTable.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../Redux/store";
import {Card} from "./Card";
import {EMPTY_STRING} from "../../../../constants";
import {CardsTablePropsType} from "./types";
import {sortFields} from "../../../../utilits";
import {cardsAction} from "../../../../Redux/cardsReducer";

export const CardsTable = ({cards}: CardsTablePropsType) => {
    const dispatch = useDispatch();
    const myUserId = useSelector<AppRootStateType, string>(state => state.profilePage._id)
    let isCheckId = cards.every(m => m.user_id === myUserId)
    const classMyCards = `${isCheckId ? `${styles.itemMy}` : `${styles.item}`}`
    const sortCards = useSelector<AppRootStateType, string>(state => state.cards.sortCards)
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading)
    const curPage = useSelector<AppRootStateType, number>(state => state.cards.page)

    const direction = sortCards[0]
    const activeField = sortCards.slice(1)
    const rotate = direction === "1" ? styles.up : EMPTY_STRING

    const sortUpdate = (): void => {
        sortFields('updated', cardsAction.sortCardsAC, isLoading, sortCards, dispatch)
        if (curPage !== 1) {
            dispatch(cardsAction.changeCurrentPageCardsAC(1));
        }
    }
    const sortQuestion = (): void => {
        sortFields('question', cardsAction.sortCardsAC, isLoading, sortCards, dispatch)
        if (curPage !== 1) {
            dispatch(cardsAction.changeCurrentPageCardsAC(1));
        }
    }
    const sortAnswer = (): void => {
        sortFields('answer', cardsAction.sortCardsAC, isLoading, sortCards, dispatch)
        if (curPage !== 1) {
            dispatch(cardsAction.changeCurrentPageCardsAC(1));
        }
    }
    const sortGrade = (): void => {
        sortFields('grade', cardsAction.sortCardsAC, isLoading, sortCards, dispatch)
    }

    return (
        <div className={styles.table}>
            <div className={`${styles.header} ${classMyCards}`}>
                <div onClick={sortQuestion}
                     className={activeField === "question" ? `${styles.active} ${rotate}` : EMPTY_STRING}>Question
                </div>
                <div onClick={sortAnswer}
                     className={activeField === "answer" ? `${styles.active} ${rotate}` : EMPTY_STRING}>Answer
                </div>
                <div onClick={sortUpdate}
                     className={activeField === "updated" ? `${styles.active} ${rotate}` : EMPTY_STRING}>Last
                    Updated
                </div>
                <div onClick={sortGrade}
                     className={activeField === "grade" ? `${styles.active} ${rotate}` : EMPTY_STRING}>Grade
                </div>
                {
                    isCheckId && <>
                        <div>Actions</div>
                    </>
                }
            </div>
            {
                cards.length > 0
                    ? cards.map(card => <Card key={card._id} card={card} isCheckId={isCheckId}
                                              classMyCards={classMyCards}/>)
                    : <div style={{padding: '16px 24px'}}>Nothing found</div>
            }
        </div>
    );
};