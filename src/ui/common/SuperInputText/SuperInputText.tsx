import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './SuperInputText.module.css';
import {SuperInputTextPropsType} from "./types";
import {ReturnComponentType} from "../../../types";

export const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        ...restProps
    }
): ReturnComponentType => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange
        && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>): void => {
        onKeyPress && onKeyPress(e);
        onEnter
        && e.key === 'Enter'
        && onEnter()
    }

    const finalInputClassName = `${s.superInput} ${error && s.errorInput} ${className}`

    return (
        <>
            <div className={s.inputContainer}>
                <input
                    type={'text'}
                    onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback}
                    className={finalInputClassName}
                    {...restProps}
                />
            </div>
        </>
    )
};