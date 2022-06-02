import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './SuperInputPassword.module.css';
import {ReturnComponentType} from "../../../types";
import {SuperInputPasswordPropsType} from "./types";

export const SuperInputPassword: React.FC<SuperInputPasswordPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        ...restProps
    }
): ReturnComponentType => {
    const [isShown, setIsShow] = useState<boolean>(false);

    const typeInput = isShown ? 'text' : 'password';

    const togglePassword = () => setIsShow(!isShown);

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
                    type={typeInput}
                    onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback}
                    className={finalInputClassName}

                    {...restProps}
                />
                <button onClick={togglePassword} className={`${s.eye} ${isShown && s.eyeShow}`}></button>
            </div>
        </>
    )
};
