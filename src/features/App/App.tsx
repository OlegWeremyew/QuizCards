import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {ReturnComponentType} from "../../types";
import {Preloader, RoutesComponent} from "../../ui";
import {initializeAppTC} from "../../Redux/appReducer";
import {getInitializedAppSelector} from "../../selectors";

export const App = (): ReturnComponentType => {
    const dispatch = useDispatch();

    const isInitialized = useSelector(getInitializedAppSelector)

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
