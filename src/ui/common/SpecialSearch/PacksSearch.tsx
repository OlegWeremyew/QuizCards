import React, { ChangeEvent, useState, KeyboardEvent, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { EMPTY_STRING } from '../../../constants';
import { cardsPackAction } from '../../../Redux/cardsPackReducer';
import { getPackNameCardsPackSelector } from '../../../selectors';
import { ReturnComponentType } from '../../../types';

import s from './PackSearch.module.css';

export const PacksSearch = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const packName = useSelector(getPackNameCardsPackSelector);
  const [event, setEvent] = useState<string>(EMPTY_STRING);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEvent(e.currentTarget.value);
  };

  useEffect(() => {
    if (packName !== event) setEvent(packName);
  }, [packName]);

  const BtnHandler = (): void => {
    dispatch(cardsPackAction.setFilteredPacksAC(event));
    dispatch(cardsPackAction.changeCurrentPageAC(1));
  };

  const onKeyPressBtnHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      BtnHandler();
    }
  };

  return (
    <div className={s.wrap}>
      <input
        onKeyPress={onKeyPressBtnHandler}
        type="text"
        placeholder="Search..."
        value={event}
        onChange={handleChange}
      />
      <button type="button" onClick={BtnHandler} className={s.btnSearch} />
    </div>
  );
};
