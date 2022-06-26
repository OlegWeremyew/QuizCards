import React, { FC } from 'react';

import s from './SuperButton.module.scss';
import { SuperButtonPropsType } from './types';

export const SuperButton: FC<SuperButtonPropsType> = ({
  red,
  light,
  className,
  ...restProps
}) => {
  const finalClassName = `${red ? s.red : s.default} ${
    light ? s.light : s.default
  } ${className}`;

  return <button type="button" className={finalClassName} {...restProps} />;
};
