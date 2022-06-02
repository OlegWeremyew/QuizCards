import React, {ChangeEvent} from 'react';
import s from './SuperCheckbox.module.css';
import {ReturnComponentType} from "../../../types";
import {SuperCheckboxPropsType} from "./types";

export const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type,
        onChange, onChangeChecked,
        className, spanClassName,
        children,

        ...restProps
    }
): ReturnComponentType => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    }

    const finalInputClassName = `${s.checkbox} ${className ? className : ''}`

    return (
        <label>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}
                {...restProps}
            />
            {children && <div className={s.spanClassName}>{children}</div>}
        </label>
    )
};
