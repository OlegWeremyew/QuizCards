import React, { FC, useState } from 'react';

import classes from './SuperEditableSpan.module.scss';

import { EMPTY_STRING } from 'constants/variables';
import { SuperInputText } from 'ui/common';
import { SuperEditableSpanType } from 'ui/common/SuperEditableSpan/types';

export const SuperEditableSpan: FC<SuperEditableSpanType> = ({
  onBlur,
  onEnter,
  spanProps,
  ...restProps
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { children, onDoubleClick, className, ...restSpanProps } = spanProps || {};

  const onEnterCallback = (): void => {
    setEditMode(false);
    onEnter && onEnter();
  };

  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>): void => {
    setEditMode(false);
    onBlur && onBlur(e);
  };

  const onDoubleClickCallBack = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  ): void => {
    setEditMode(true);
    onDoubleClick && onDoubleClick(e);
  };

  const spanClassName = `${classes.input} ${className || EMPTY_STRING} `;

  return (
    <>
      {editMode ? (
        <SuperInputText
          autoFocus
          onBlur={onBlurCallback}
          onEnter={onEnterCallback}
          {...restProps}
        />
      ) : (
        <>
          <span className={classes.editableSpan}>
            <span
              onDoubleClick={onDoubleClickCallBack}
              className={spanClassName}
              {...restSpanProps}
            >
              {children || restProps.value}
              <span>&#160; &#9998;</span>
            </span>
            <span className={classes.prompt}>Double click to edit</span>
          </span>
        </>
      )}
    </>
  );
};
