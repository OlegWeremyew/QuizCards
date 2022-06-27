import React, { ChangeEvent, useState, KeyboardEvent, useEffect, FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './PackSearch.module.scss';

import { EMPTY_STRING } from 'constants/variables';
import { cardsPackAction } from 'Redux/cardsPackReducer';
import { getPackNameCardsPackSelector } from 'selectors';

export const PacksSearch: FC = () => {
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
    <div className={style.wrap}>
      <input
        onKeyPress={onKeyPressBtnHandler}
        type="text"
        placeholder="Search packs..."
        value={event}
        onChange={handleChange}
      />
      <button type="button" onClick={BtnHandler} className={style.btnSearch} />
    </div>
  );
};
