import React, {useState} from 'react';
import style from './Demo.module.css'
import {SuperButton} from "../common/SuperButton/SuperButton";
import {SuperCheckbox} from "../common/SuperCheckbox/SuperCheckbox";
import {SuperEditableSpan} from "../common/SuperEditableSpan/SuperEditableSpan";
import {SuperRadio} from "../common/SuperRadio/SuperRadio";
import {SuperSelect} from "../common/SuperSelect/SuperSelect";
import {Preloader} from "../common/Preloader/Preloader";
import {SuperInputText} from "../common/SuperInputText/SuperInputText";

export const Demo = () => {

    const arr = ["Oleg", "Diana", "Bubcha"]

    const [value, setValue] = useState<string>('')
    const [valueElem, onChangeOption] = useState(arr[1])

    return (
        <div>
            <h1>Demo page</h1>
            <div className={style.login__items}>
                <div className={style.login__item}>
                    <SuperInputText placeholder={"Введите текст"}/>
                </div>
                <div className={style.login__item}>
                    <SuperCheckbox>Ознакомлен и согласен</SuperCheckbox>
                </div>
                <div className={style.login__item}>
                    <SuperButton>Кнопка подтверждения</SuperButton>
                </div>
            </div>
            <div>

            </div>
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'click on for change...'}}
                />
            </div>
            <div>
                <SuperSelect
                    value={valueElem}
                    options={arr}/>
            </div>
            <div>
                <SuperRadio
                    name={"radio"}
                    options={["Oleg", "Diana", "Bubcha"]}
                    value={valueElem}
                />
            </div>
            <Preloader/>
        </div>
    );
};