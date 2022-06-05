import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { EMPTY_STRING } from '../../../../constants';
import { PATH } from '../../../../constants/routes';
import { AppAction } from '../../../../Redux/appReducer';
import { passwordForgotTC } from '../../../../Redux/passwordReducer';
import {
  getErrorAppSelector,
  getIsLoadingAppSelector,
  getIsSendPasswordSelector,
} from '../../../../selectors';
import { ReturnComponentType } from '../../../../types';
import { Frame, Preloader, SuperButton, SuperInputText } from '../../../../ui';
import styles from '../../Login/Login.module.scss';

import s from './ForgotYourPassword.module.scss';

export const ForgotYourPassword = (): ReturnComponentType => {
  const isSend = useSelector(getIsSendPasswordSelector);
  const isError = useSelector(getErrorAppSelector);
  const loading = useSelector(getIsLoadingAppSelector);

  useEffect(() => {
    dispatch(AppAction.setErrorAC(EMPTY_STRING));
  }, []);

  const [email, setEmail] = useState(EMPTY_STRING);

  const dispatch = useDispatch();

  const onClickHandler = (): void => {
    dispatch(passwordForgotTC(email));
  };

  if (isSend) {
    return <Navigate to={PATH.CHECK_EMAIL} />;
  }

  return (
    <>
      {loading && <Preloader />}
      <Frame>
        <h2>Forgot your password?</h2>
        {isError && <div className={s.error}>{isError}</div>}
        <div className={s.input}>
          <label className={styles.label} htmlFor="forgotPassword">
            Email
          </label>
          <SuperInputText
            id="forgotPassword"
            error={isError}
            value={email}
            onChangeText={setEmail}
          />
        </div>
        <p>Enter your email address and we will send you further instructions</p>
        <SuperButton onClick={onClickHandler} style={{ padding: '10px 60px' }}>
          Send instructions
        </SuperButton>
        <p>Did you remember your password?</p>
        <NavLink to={PATH.LOGIN} className={styles.linkLogin}>
          <p className={styles.signUpText}>Try logging in</p>
        </NavLink>
      </Frame>
    </>
  );
};
