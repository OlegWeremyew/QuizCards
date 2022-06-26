import React, { ChangeEvent, FC, KeyboardEvent } from 'react';

import s from './SuperInputText.module.scss';
import { SuperInputTextPropsType } from './types';

export const SuperInputText: FC<SuperInputTextPropsType> = ({
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  error,
  className,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(e);
    onChangeText && onChangeText(e.currentTarget.value);
  };

  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>): void => {
    onKeyPress && onKeyPress(e);
    onEnter && e.key === 'Enter' && onEnter();
  };

  const finalInputClassName = `${s.superInput} ${error && s.errorInput} ${className}`;

  return (
    <>
      <div className={s.inputContainer}>
        <input
          type="text"
          onChange={onChangeCallback}
          onKeyPress={onKeyPressCallback}
          className={finalInputClassName}
          {...restProps}
        />
      </div>
    </>
  );
};
