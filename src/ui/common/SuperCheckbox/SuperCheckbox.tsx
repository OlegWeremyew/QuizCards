import React, { ChangeEvent } from 'react';

import { EMPTY_STRING } from '../../../constants';
import { ReturnComponentType } from '../../../types';

import s from './SuperCheckbox.module.css';
import { SuperCheckboxPropsType } from './types';

export const SuperCheckbox: React.FC<SuperCheckboxPropsType> = ({
  onChange,
  onChangeChecked,
  className,
  children,
  ...restProps
}): ReturnComponentType => {
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
