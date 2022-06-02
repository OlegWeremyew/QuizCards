import React, {ChangeEvent} from 'react'
import s from './SuperSelect.module.css'
import {SuperSelectPropsType} from "./types";
import {ReturnComponentType} from "../../../types";

export const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        totalCount,
        ...restProps
    }
): ReturnComponentType => {
    const mappedOptions: any[] = options ? options.map((o, i) => {
        return (
            <option key={i} value={o} className={s.options} disabled={totalCount < o}>{o}</option>
        );
    }) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>): void => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select className={s.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}
