import React from 'react';
import PreloaderGif from "../../../assets/image/Preloader.gif"
import c from './Preloader.module.css'
import {AppRootStateType} from "../../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {SuperButton} from "../SuperButton/SuperButton";
import {loadingAC} from "./loadingReducer";

export const Preloader = () => {
    const loading = useSelector<AppRootStateType, boolean>(state => state.loading.PreloaderStatus)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div>
            <div className={c.main}>
                <span className={c.homeworks10}>Preloader</span>
                {loading
                    ? (
                        <div><img src={PreloaderGif} alt="preloader"/></div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
        </div>
    )
};
