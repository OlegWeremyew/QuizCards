import React, { ChangeEvent } from 'react';

import stl from './SuperRadio.module.css';
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
        <label key={`${name}-${i}`}>
          <input
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
