import React from 'react'
import s from './SuperButton.module.css'
import {ReturnComponentType} from "../../../types";
import {SuperButtonPropsType} from "./types";

export const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, light, className,
        ...restProps
    }
): ReturnComponentType => {
    const finalClassName = `${red ? s.red : s.default} ${light ? s.light : s.default} ${className}`

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    )
};
