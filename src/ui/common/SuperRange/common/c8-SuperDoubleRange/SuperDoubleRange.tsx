import React from 'react';

import { ReturnComponentType } from '../../../../../types';
import SuperRange from '../c7-SuperRange/SuperRange';

import stl from './DoubleRange.module.css';

type SuperDoubleRangePropsType = {
  onChangeRange: (value: [number, number]) => void;
  value: [number, number];
  // eslint-disable-next-line react/require-default-props
  max?: number;
};

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
  onChangeRange,
  value,
  max,
}): ReturnComponentType => {
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
