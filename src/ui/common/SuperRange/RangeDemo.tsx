import React, {useState} from 'react'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import stl from './RangeDemo.module.css'

export function RangeDemo() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeDoubleRanger = (value: [number, number]): void => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div className={stl.container}>
            <span>{value1}</span>
            <SuperDoubleRange
                value={[value1, value2]}
                onChangeRange={onChangeDoubleRanger}
            />
            <span>{value2}</span>
        </div>
    )
}

