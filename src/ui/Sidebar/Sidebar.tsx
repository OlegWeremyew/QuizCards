import React, { FC, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { DoubleCheckbox } from '../common';
import SuperDoubleRange from '../common/SuperRange/common/c8-SuperDoubleRange/SuperDoubleRange';
import stl from '../common/SuperRange/RangeDemo.module.scss';

import styles from './Sidebar.module.scss';

import { cardsPackAction } from 'Redux/cardsPackReducer';
import {
  getMaxCardsCountCardsPackSelector,
  getMaxCardsPackSelector,
  getMinCardsPackSelector,
} from 'selectors';

export const Sidebar: FC = () => {
  const dispatch = useDispatch();
  const maxCardsCount = useSelector(getMaxCardsCountCardsPackSelector);
  const max = useSelector(getMaxCardsPackSelector);
  const min = useSelector(getMinCardsPackSelector);
  const [id, setId] = useState<number>(0);

  useEffect(() => {
    dispatch(cardsPackAction.setMaxAC(maxCardsCount));
  }, [maxCardsCount]);

  const onChangeDoubleRanger = (value: [number, number]): void => {
    if (value[0] !== min) dispatch(cardsPackAction.setMinAC(value[0]));
    if (value[1] !== max) dispatch(cardsPackAction.setMaxAC(value[1]));
    clearTimeout(id);
    const x = +setTimeout(() => {
      dispatch(cardsPackAction.setDebouncingFlagAC());
    }, 1500);
    setId(x);
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <p>Show packs cards</p>
        <DoubleCheckbox />
      </div>
      <div className={styles.containerNumberOfCards}>
        <p>Number of cards</p>
        <div className={stl.container}>
          <span>{min}</span>
          <SuperDoubleRange
            value={[min, max]}
            max={maxCardsCount}
            onChangeRange={onChangeDoubleRanger}
          />
          <span>{max}</span>
        </div>
      </div>
    </div>
  );
};
