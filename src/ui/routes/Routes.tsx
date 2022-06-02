import React from 'react';
import {Routes, Route} from "react-router-dom";
import {PATH} from "../../constants/routes";
import {
    Cards,
    CheckEmail,
    ForgotYourPassword, Learn,
    Login,
    PacksList,
    PasswordRecovery1,
    Profile,
    Registration, Test
} from "../../features";
import {Error404} from "../common";


export const RoutesComponent = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.SET_NEW_PASSWORD + `/:token`} element={<PasswordRecovery1/>}/>
                <Route path={PATH.FORGOT_YOUR_PASSWORD} element={<ForgotYourPassword/>}/>
                <Route path={PATH.CHECK_EMAIL} element={<CheckEmail/>}/>
                <Route path={PATH.PACKS} element={<PacksList/>}/>
                <Route path={PATH.CARDS + '/:packId'} element={<Cards/>}/>
                <Route path={PATH.LEARN + '/:packId'} element={<Learn/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>
                <Route path={"/*"} element={<Error404/>}/>
            </Routes>
        </>
    );
};