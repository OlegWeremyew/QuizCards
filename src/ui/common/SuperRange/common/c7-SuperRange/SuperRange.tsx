import React, { ChangeEvent, FC } from 'react';

import { EMPTY_STRING } from '../../../../../constants';

import s from './SuperRange.module.scss';
import { SuperRangePropsType } from './types';

const SuperRange: FC<SuperRangePropsType> = ({
  onChange,
  onChangeRange,
  className,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(e);
    onChangeRange && onChangeRange(+e.currentTarget.value);
  };

  const finalRangeClassName = `${s.range} ${className || EMPTY_STRING}`;

  return (
    <>
      <input
        type="range"
        onChange={onChangeCallback}
        className={finalRangeClassName}
        {...restProps}
      />
    </>
  );
};

export default SuperRange;
