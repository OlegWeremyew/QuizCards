import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import s from './SuperInputPassword.module.scss';
import { SuperInputPasswordPropsType } from './types';

export const SuperInputPassword: FC<SuperInputPasswordPropsType> = ({
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  error,
  className,
  ...restProps
}) => {
  const [isShown, setIsShow] = useState<boolean>(false);

  const typeInput = isShown ? 'text' : 'password';

  const togglePassword = (): void => setIsShow(!isShown);

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
          type={typeInput}
          onChange={onChangeCallback}
          onKeyPress={onKeyPressCallback}
          className={finalInputClassName}
          {...restProps}
        />
        <button
          type="button"
          onClick={togglePassword}
          className={`${s.eye} ${isShown && s.eyeShow}`}
        />
      </div>
    </>
  );
};
