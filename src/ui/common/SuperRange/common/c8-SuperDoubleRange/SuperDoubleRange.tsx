import React, { FC } from 'react';

import SuperRange from '../c7-SuperRange/SuperRange';

import stl from './DoubleRange.module.scss';
import { SuperDoubleRangePropsType } from './types';

const SuperDoubleRange: FC<SuperDoubleRangePropsType> = ({
  onChangeRange,
  value,
  max,
}) => {
  const onChangeRangeMin = (min: number): void => {
    if (value[0] <= value[1]) {
      onChangeRange([min, value[1]]);
    } else {
      onChangeRange([min, min]);
    }
  };

  const onChangeRangerMax = (max: number): void => {
    if (value[0] <= value[1]) {
      onChangeRange([value[0], max]);
    } else {
      onChangeRange([max, max]);
    }
  };
  return (
    <>
      <div className={stl.wrapper}>
        <SuperRange
          className={stl.wrapper}
          value={value[0]}
          onChangeRange={onChangeRangeMin}
          max={max}
        />
        <SuperRange
          className={stl.double}
          value={value[1]}
          onChangeRange={onChangeRangerMax}
          max={max}
        />
      </div>
    </>
  );
};

export default SuperDoubleRange;
