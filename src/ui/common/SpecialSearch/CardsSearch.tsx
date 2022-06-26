import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import { useDispatch } from 'react-redux';

import { EMPTY_STRING } from '../../../constants';
import { cardsAction } from '../../../Redux/cardsReducer';

import styles from './PackSearch.module.scss';

export const CardsSearch: FC = () => {
  const dispatch = useDispatch();

  const [event, setEvent] = useState<string>(EMPTY_STRING);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEvent(e.currentTarget.value);
  };

  const BtnHandler = (): void => {
    dispatch(cardsAction.setFilterReducerAC(event));
    dispatch(cardsAction.changeCurrentPageCardsAC(1));
  };

  const onKeyPressBtnHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      BtnHandler();
    }
  };

  return (
    <div className={styles.wrap}>
      <input
        type="text"
        placeholder="Search..."
        onKeyPress={onKeyPressBtnHandler}
        value={event}
        onChange={handleChange}
      />
      <button type="button" onClick={BtnHandler} className={styles.btnSearch} />
    </div>
  );
};
