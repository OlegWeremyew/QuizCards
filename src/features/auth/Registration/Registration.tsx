import React, { FC, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import styles from '../Login/Login.module.scss';

import s from './Registration.module.scss';

import { PATH } from 'constants/routes';
import { EMPTY_STRING } from 'constants/variables';
import { AppAction } from 'Redux/appReducer';
import { registerAction, registerTC } from 'Redux/registerReducer';
import {
  getErrorAppSelector,
  getIsLoadingAppSelector,
  getIsRegisteredRegisterSelector,
} from 'selectors';
import { Frame, Preloader, SuperButton, SuperInputPassword, SuperInputText } from 'ui';
import { Helmet } from 'react-helmet';

export const Registration: FC = () => {
  const [email, setEmail] = useState<string>(EMPTY_STRING);
  const [password, setPassword] = useState<string>(EMPTY_STRING);
  const [confirmPassword, setConfirmPassword] = useState<string>(EMPTY_STRING);

  const isRegistered = useSelector(getIsRegisteredRegisterSelector);
  const error = useSelector(getErrorAppSelector);
  const loading = useSelector(getIsLoadingAppSelector);
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(registerAction.setRegister(false));
      dispatch(AppAction.setErrorAC(EMPTY_STRING));
    },
    [],
  );

  const onClickHandler = (): void => {
    if (password !== confirmPassword) {
      dispatch(AppAction.setErrorAC('Password and confirmation password do not match'));
    } else {
      dispatch(registerTC(email, password));
    }
  };

  if (isRegistered) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <>
      <Helmet>
        <title>registration</title>
        <meta name="description" content="registration" />
      </Helmet>
      {loading && <Preloader />}
      <Frame>
        <h2>Sign up</h2>
        {error && <div className={s.error}>{error}</div>}
        <div className={s.input}>
          <label className={styles.label} htmlFor="registrationEmail">
            Email
          </label>
          <SuperInputText id="registrationEmail" value={email} onChangeText={setEmail} />
        </div>
        <div className={s.input}>
          <label className={styles.label} htmlFor="registrationPassword">
            Password
          </label>
          <SuperInputPassword
            id="registrationPassword"
            value={password}
            onChangeText={setPassword}
          />
        </div>
        <div className={s.input}>
          <label className={styles.label} htmlFor="registrationConfirmPassword">
            Confirm password
          </label>
          <SuperInputPassword
            id="registrationConfirmPassword"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </div>
        <SuperButton onClick={onClickHandler} style={{ padding: '10px 60px' }}>
          Register
        </SuperButton>
        <p>
          <NavLink to={PATH.LOGIN} className={s.linkLogin}>
            <p className={s.signUpText}>To login</p>
          </NavLink>
        </p>
      </Frame>
    </>
  );
};
