import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {initializeAppTC} from "../Redux/appReducer";
import {AppRootStateType} from "../Redux/store";
import {ReturnComponentType} from "../types";
import {Preloader, RoutesComponent} from "../ui";

export const App = (): ReturnComponentType => {
    const dispatch = useDispatch();

    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [dispatch])

    if (!isInitialized) {
        return <Preloader/>
    }

    return (
        <div className="App">
            <RoutesComponent/>
        </div>
    );
};
