import React, { ChangeEvent, FC } from 'react';

import s from './SuperSelect.module.scss';
import { SuperSelectPropsType } from './types';

export const SuperSelect: FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  totalCount,
  ...restProps
}) => {
  const mappedOptions: any[] = options
    ? options.map((o, i) => (
        <option key={i} value={o} className={s.options} disabled={totalCount < o}>
          {o}
        </option>
      ))
    : [];

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>): void => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  return (
    <select className={s.select} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  );
};
