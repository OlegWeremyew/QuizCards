import React, { useState } from 'react';

import { ReturnComponentType } from '../../../types';

import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import stl from './RangeDemo.module.scss';

export const RangeDemo = (): ReturnComponentType => {
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(100);

  const onChangeDoubleRanger = (value: [number, number]): void => {
    setValue1(value[0]);
    setValue2(value[1]);
  };

  return (
    <div className={stl.container}>
      <span>{value1}</span>
      <SuperDoubleRange value={[value1, value2]} onChangeRange={onChangeDoubleRanger} />
      <span>{value2}</span>
    </div>
  );
};
