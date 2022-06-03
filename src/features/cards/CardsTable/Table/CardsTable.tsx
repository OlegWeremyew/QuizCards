import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { EMPTY_STRING } from '../../../../constants';
import { cardsAction } from '../../../../Redux/cardsReducer';
import {
  get_idProfileSelector,
  getIsLoadingAppSelector,
  getPageCardsSelector,
  getSortCardsCardsSelector,
} from '../../../../selectors';
import { ReturnComponentType } from '../../../../types';
import { sortFields } from '../../../../utilits';

import { Card } from './Card';
import styles from './CardsTable.module.css';
import { CardsTablePropsType } from './types';

export const CardsTable = ({ cards }: CardsTablePropsType): ReturnComponentType => {
  const dispatch = useDispatch();

  const myUserId = useSelector(get_idProfileSelector);

  const isCheckId = cards.every(m => m.user_id === myUserId);

  const classMyCards = `${isCheckId ? `${styles.itemMy}` : `${styles.item}`}`;

  const sortCards = useSelector(getSortCardsCardsSelector);
  const isLoading = useSelector(getIsLoadingAppSelector);
  const curPage = useSelector(getPageCardsSelector);

  const direction = sortCards[0];
  const activeField = sortCards.slice(1);
  const rotate = direction === '1' ? styles.up : EMPTY_STRING;

  const sortUpdate = (): void => {
    sortFields('updated', cardsAction.sortCardsAC, isLoading, sortCards, dispatch);
    if (curPage !== 1) {
      dispatch(cardsAction.changeCurrentPageCardsAC(1));
    }
  };
  const sortQuestion = (): void => {
    sortFields('question', cardsAction.sortCardsAC, isLoading, sortCards, dispatch);
    if (curPage !== 1) {
      dispatch(cardsAction.changeCurrentPageCardsAC(1));
    }
  };
  const sortAnswer = (): void => {
    sortFields('answer', cardsAction.sortCardsAC, isLoading, sortCards, dispatch);
    if (curPage !== 1) {
      dispatch(cardsAction.changeCurrentPageCardsAC(1));
    }
  };
  const sortGrade = (): void => {
    sortFields('grade', cardsAction.sortCardsAC, isLoading, sortCards, dispatch);
  };

  return (
    <div className={styles.table}>
      <div className={`${styles.header} ${classMyCards}`}>
        <div
          onClick={sortQuestion}
          className={
            activeField === 'question' ? `${styles.active} ${rotate}` : EMPTY_STRING
          }
        >
          Question
        </div>
        <div
          onClick={sortAnswer}
          className={
            activeField === 'answer' ? `${styles.active} ${rotate}` : EMPTY_STRING
          }
        >
          Answer
        </div>
        <div
          onClick={sortUpdate}
          className={
            activeField === 'updated' ? `${styles.active} ${rotate}` : EMPTY_STRING
          }
        >
          Last Updated
        </div>
        <div
          onClick={sortGrade}
          className={
            activeField === 'grade' ? `${styles.active} ${rotate}` : EMPTY_STRING
          }
        >
          Grade
        </div>
        {isCheckId && (
          <>
            <div>Actions</div>
          </>
        )}
      </div>
      {cards.length > 0 ? (
        cards.map(card => (
          <Card
            key={card._id}
            card={card}
            isCheckId={isCheckId}
            classMyCards={classMyCards}
          />
        ))
      ) : (
        <div style={{ padding: '16px 24px' }}>Nothing found</div>
      )}
    </div>
  );
};