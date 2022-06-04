import React, { ChangeEvent } from 'react';

import stl from './SuperRadio.module.scss';
import { SuperRadioPropsType } from './types';

export const SuperRadio: React.FC<SuperRadioPropsType> = ({
  name,
  options,
  value,
  className,
  onChange,
  onChangeOption,
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  const finalSelectClassName = `$ ${className || stl.superRadio}`;

  const mappedOptions: any[] = options
    ? options.map((o, i) => (
        <label className={stl.label} htmlFor={o} key={`${name}-${i}`}>
          <input
            id={o}
            type="radio"
            name={o}
            value={o}
            checked={o === value}
            onChange={onChangeCallback}
            className={finalSelectClassName}
          />
          &nbsp; {o} &nbsp;
        </label>
      ))
    : [];

  return <>{mappedOptions}</>;
};
