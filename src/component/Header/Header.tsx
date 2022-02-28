import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from "../../App/RoutesComponent/RoutesComponent";

export const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to={PATH.LOGIN}>Log in</NavLink>
                <NavLink to={PATH.REGISTRATION}>Sign in</NavLink>
                <NavLink to={PATH.PROFILE}>Profile</NavLink>
                <NavLink to={PATH.RECOVERY_PASSWORD}>Recovery password</NavLink>
                <NavLink to={PATH.NEW_PASSWORD}>New password</NavLink>
                <NavLink to={PATH.DEMO}>Demo</NavLink>
            </nav>
        </header>
    );
};
