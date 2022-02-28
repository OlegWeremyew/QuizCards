import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Login} from "../../component/Login/Login";
import {Demo} from "../../component/Demo/Demo";
import {Registration} from "../../component/Registration/Registration";
import {Profile} from "../../component/Profile/Profile";
import {NewPassword} from "../../component/Password/NewPassword/NewPassword";
import {RecoveryPassword} from "../../component/Password/RecoveryPassword/RecoveryPassword";
import {Page404} from "../../component/Page 404/Page 404";

export const PATH = {
    DEMO: '/demo',
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    NEW_PASSWORD: '/mew-password',
    RECOVERY_PASSWORD: "/change-password",
    PAGE_404: '/404',
}

export const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={PATH.DEMO}/>}/>
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.DEMO} element={<Demo/>}/>
            <Route path={PATH.REGISTRATION} element={<Registration/>}/>
            <Route path={PATH.PROFILE} element={<Profile/>}/>
            <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
            <Route path={PATH.RECOVERY_PASSWORD} element={<RecoveryPassword/>}/>
            <Route path={PATH.PAGE_404} element={<Page404/>}/>
            <Route path="*" element={<Navigate to={PATH.PAGE_404}/>}/>
        </Routes>
    );
};