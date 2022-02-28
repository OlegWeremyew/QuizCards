import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'
import {Button} from "@material-ui/core";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

export const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps
    }
) => {
    const finalClassName = `${red ? s.red : s.default} ${className}`

    return (
            <button
                className={finalClassName}
                {...restProps}
            />
    )
}
