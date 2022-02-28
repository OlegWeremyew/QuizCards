import React from 'react';
import {Route, Routes } from 'react-router-dom';

export const PATH = {
    Demo: '/demo',
    Login: '/login',
    Registration: '/registration',
    Page_404: '/404',
    Profile: '/profile',
    New_Password: '/mew-password',
    Change_Password: "/change-password"
}

export const RoutesComponent = () => {
    return (
        <Routes>
            <Route path={""} element={<div>fdgdgfh</div>}/>
        </Routes>
    );
};