import React from 'react';

import { ReturnComponentType } from '../../../types';

import s from './SuperButton.module.scss';
import { SuperButtonPropsType } from './types';

export const SuperButton: React.FC<SuperButtonPropsType> = ({
  red,
  light,
  className,
  ...restProps
}): ReturnComponentType => {
  const finalClassName = `${red ? s.red : s.default} ${
    light ? s.light : s.default
  } ${className}`;

  return <button type="button" className={finalClassName} {...restProps} />;
};
