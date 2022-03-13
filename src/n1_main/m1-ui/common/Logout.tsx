import React from 'react';
import {logoutUserTC} from "../../m2-bll/r1-reducers/LoginFormReducer";
import {useDispatch} from "react-redux";
import {useFridaySelector} from "../../m2-bll/store";
import {Navigate} from "react-router-dom";
import {RoutesXPaths} from "../routes/routes";
import style from './Logout.module.css'

const Logout = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useFridaySelector<boolean>(state => state.login.isLoggedIn)

    const logoutHandler = () => {
        dispatch(logoutUserTC())
    }

    if (!isLoggedIn) {
        return <Navigate to={RoutesXPaths.LOGIN}/>
    }

    return (
            <div
                className={style.logoutBtn}
                onClick={logoutHandler}>Click me for logout
            </div>
    )
};

export default Logout;