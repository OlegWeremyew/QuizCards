import React, {useEffect, useState} from "react";
import {Frame} from "../../../../main/ui/common/Frame/Frame";
import SuperInputPassword from "../../../../main/ui/common/SuperInputPassword/SuperInputPassword";
import SuperButton from "../../../../main/ui/common/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useParams} from "react-router-dom";
import {AppRootStateType} from "../../../../main/bll/store";
import styles from "./passwordRecovery1.module.css";
import {changePassTC} from "../../../../main/bll/passwordReducer";
import Preloader from "../../../../main/ui/common/Preloader/Preloader";
import {setErrorAC} from "../../../../main/bll/appReducer";
import {EMPTY_STRING} from "../../../../constants";
import {Nullable, ReturnComponentType} from "../../../../types";
import {PATH} from "../../../../constants/routes";

export const PasswordRecovery1 = (): ReturnComponentType => {
    const [password, setPassword] = useState<string>(EMPTY_STRING);
    const isChangedPass = useSelector<AppRootStateType, boolean>(state => state.recovery.isChangedPass);
    const error = useSelector<AppRootStateType, Nullable<string>>(state => state.app.error);
    const loading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);
    const dispatch = useDispatch()
    const {token} = useParams<{ token: string }>();

    useEffect(() => {
        dispatch(setErrorAC(EMPTY_STRING))
    }, [])

    const newPasswordHandler = (): void => {
        dispatch(changePassTC(password, token))
    }

    if (isChangedPass) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <>
            {loading && <Preloader/>}
            <Frame>
                <span><strong>It-incubator</strong></span>
                <h2>Create new password</h2>
                {error && <div className={styles.error}>
                    <p>{error}</p>
                </div>}
                <div className={styles.input}>
                    <label>
                        Password
                    </label>
                    <SuperInputPassword
                        value={password}
                        onChange={e => setPassword(e.currentTarget.value)}
                    />
                </div>
                <p>Create new password and we will send you further instructions to email</p>
                <SuperButton onClick={newPasswordHandler} style={{padding: '10px 60px'}}>Create new
                    password</SuperButton>
            </Frame>
        </>
    )
}