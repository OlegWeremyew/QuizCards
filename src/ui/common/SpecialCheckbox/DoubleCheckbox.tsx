import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './DoubleCheckbox.module.scss';

import { cardsPackAction } from 'Redux/cardsPackReducer';
import { getIsLoadingAppSelector, getMyPacksCardsPackSelector } from 'selectors';

export const DoubleCheckbox: FC = () => {
  const myPacks = useSelector(getMyPacksCardsPackSelector);
  const isLoading = useSelector(getIsLoadingAppSelector);
  const dispatch = useDispatch();

  const MyBlockStyles = myPacks ? styles.selected : styles.tab;
  const MyPacksStyles = !myPacks ? styles.selected : styles.tab;

  const myOnClickHandler = (): void => {
    if (!isLoading) {
      if (!myPacks) dispatch(cardsPackAction.setMyPacksAC(true));
    }
  };

  const allOnClickHandler = (): void => {
    if (!isLoading) {
      if (myPacks) dispatch(cardsPackAction.setMyPacksAC(false));
    }
  };

  return (
    <div className={styles.label}>
      <div onClick={myOnClickHandler} className={MyBlockStyles}>
        <h5>My</h5>
      </div>
      <div onClick={allOnClickHandler} className={MyPacksStyles}>
        <h5>All</h5>
      </div>
    </div>
  );
};
