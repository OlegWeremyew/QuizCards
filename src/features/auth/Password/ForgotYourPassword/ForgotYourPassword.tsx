import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Navigate, NavLink} from "react-router-dom";
import {AppRootStateType} from "../../../../Redux/store";
import s from "./ForgotYourPassword.module.css";
import styles from "../../Login/login.module.css";
import {EMPTY_STRING} from "../../../../constants";
import {PATH} from "../../../../constants/routes";
import {ReturnComponentType} from "../../../../types";
import {Frame, Preloader, SuperButton, SuperInputText} from "../../../../ui";
import {AppAction} from "../../../../Redux/appReducer";
import {passwordForgotTC} from "../../../../Redux/passwordReducer";


export const ForgotYourPassword = (): ReturnComponentType => {

    const isSend = useSelector<AppRootStateType, boolean>(state => state.recovery.isSend);
    const isError = useSelector<AppRootStateType, string>(state => state.app.error);
    const loading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);

    useEffect(() => {
        dispatch(AppAction.setErrorAC(EMPTY_STRING))
    }, [])

    const [email, setEmail] = useState(EMPTY_STRING)

    const dispatch = useDispatch()

    let onClickHandler = (): void => {
        dispatch(passwordForgotTC(email))
    }

    if (isSend) {
        return <Navigate to={PATH.CHECK_EMAIL}/>
    }

    return (
        <>
            {loading && <Preloader/>}
            <Frame>
                <span><strong>It-incubator</strong></span>
                <h2>Forgot your password?</h2>
                {isError && <div className={s.error}>{isError}</div>}
                <div className={s.input}>
                    <label>
                        Email
                    </label>
                    <SuperInputText error={isError}
                                    value={email}
                                    onChangeText={setEmail}
                    />
                </div>
                <p>Enter your email address and we will send you further instructions</p>
                <SuperButton onClick={onClickHandler} style={{padding: '10px 60px'}}>Send instructions</SuperButton>
                <p>Did you remember your password?</p>
                <NavLink to={PATH.LOGIN} className={styles.linkLogin}>
                    <p className={styles.signUpText}>Try logging in</p>
                </NavLink>
            </Frame>
        </>
    )
}



















