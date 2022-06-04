import React, { KeyboardEvent } from 'react';

import { ReturnComponentType } from '../../../types';

import styles from './SuperTextArea.module.scss';
import { SuperTextareaTextPropsType } from './types';

export const SuperTextArea: React.FC<SuperTextareaTextPropsType> = ({
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  error,
  className,
  ...restProps
}): ReturnComponentType => {
  const onChangeCallback = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    onChange && onChange(e);
    onChangeText && onChangeText(e.currentTarget.value);
  };
  const onKeyPressCallback = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    onKeyPress && onKeyPress(e);
    onEnter && e.key === 'Enter' && onEnter();
  };

  const finalAreaClassName = `${styles.superTextArea} ${
    error && styles.errorTextArea
  } ${className}`;

  return (
    <div className={styles.inputContainer}>
      <textarea
        maxLength={500}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        className={finalAreaClassName}
        {...restProps}
      />
    </div>
  );
};
