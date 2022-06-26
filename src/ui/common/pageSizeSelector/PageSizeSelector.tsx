import React, { ChangeEvent, FC, useState } from 'react';

import { SuperSelect } from '../SuperSelect';

import styles from './PageSizeSelector.module.scss';
import { PageSizeSelectorPropsType } from './types';

export const PageSizeSelector: FC<PageSizeSelectorPropsType> = ({
  pageCount,
  handler,
  totalCount,
}) => {
  const arr: number[] = [8, 10, 20, 50];

  const [value, setValue] = useState(pageCount);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
    const value = +e.currentTarget.value;
    setValue(value);
    handler(value);
  };

  return (
    <div className={styles.containerSelector}>
      <p>Show</p>
      <SuperSelect
        totalCount={totalCount}
        options={arr}
        value={value}
        onChange={onChangeHandler}
      />
      <p>Cards per Page</p>
    </div>
  );
};
