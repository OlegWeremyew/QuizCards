import React, { ChangeEvent, FC } from 'react';

import { EMPTY_STRING } from '../../../constants';

import s from './SuperCheckbox.module.scss';
import { SuperCheckboxPropsType } from './types';

export const SuperCheckbox: FC<SuperCheckboxPropsType> = ({
  onChange,
  onChangeChecked,
  className,
  children,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(e);
    onChangeChecked && onChangeChecked(e.currentTarget.checked);
  };

  const finalInputClassName = `${s.checkbox} ${className || EMPTY_STRING}`;

  return (
    <label>
      <input
        type="checkbox"
        onChange={onChangeCallback}
        className={finalInputClassName}
        {...restProps}
      />
      {children && <div className={s.spanClassName}>{children}</div>}
    </label>
  );
};
