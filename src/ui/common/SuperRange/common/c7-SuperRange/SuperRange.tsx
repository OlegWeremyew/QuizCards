import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { EMPTY_STRING } from '../../../../../constants';
import { ReturnComponentType } from '../../../../../types';

import s from './SuperRange.module.scss';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperRangePropsType = DefaultInputPropsType & {
  // eslint-disable-next-line react/require-default-props
  onChangeRange?: (value: number) => void;
};

const SuperRange: React.FC<SuperRangePropsType> = ({
  onChange,
  onChangeRange,
  className,
  ...restProps
}): ReturnComponentType => {
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
