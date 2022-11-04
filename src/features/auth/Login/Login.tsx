import React, { FC, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import styles from './Login.module.scss';
import { Helmet } from 'react-helmet';

import { PATH } from 'constants/routes';
import { EMPTY_STRING } from 'constants/variables';
import { AppAction } from 'Redux/appReducer';
import { loginTC } from 'Redux/loginReducer';
import {
  getErrorAppSelector,
  getIsLoadingAppSelector,
  getStatusLoginSelector,
} from 'selectors';
import {
  Frame,
  Preloader,
  SuperButton,
  SuperCheckbox,
  SuperInputPassword,
  SuperInputText,
} from 'ui';

export const Login: FC = () => {
  const [email, setEmail] = useState<string>(EMPTY_STRING);
  const [password, setPassword] = useState<string>(EMPTY_STRING);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const loginStatus = useSelector(getStatusLoginSelector);
  const loading = useSelector(getIsLoadingAppSelector);
  const error = useSelector(getErrorAppSelector);
  const dispatch = useDispatch();

  const loginHandler = (): void => {
    dispatch(loginTC(email, password, rememberMe));
  };

  useEffect(() => {
    dispatch(AppAction.setErrorAC(EMPTY_STRING));
  }, []);

  if (loginStatus) {
    return <Navigate to={PATH.PROFILE} />;
  }

  return (
    <>
      <Helmet>
        <title>login</title>
        <meta name="description" content="login page" />
      </Helmet>
      {loading && <Preloader />}
      <Frame>
        <h2>Sign In</h2>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.input}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <SuperInputText
            id="email"
            error={error}
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className={styles.input}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <SuperInputPassword
            id="password"
            error={error}
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          />
        </div>
        <div className={styles.containerCheckbox}>
          <SuperCheckbox
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label className={styles.label} htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <p className={styles.forgotText}>
          <NavLink to={PATH.FORGOT_YOUR_PASSWORD} className={styles.linkLogin}>
            Forgot Password 🤯
          </NavLink>
        </p>
        <SuperButton onClick={loginHandler} style={{ padding: '10px 60px' }}>
          Login
        </SuperButton>
        <p>Don’t have an account?</p>
        <NavLink to={PATH.REGISTRATION} className={styles.linkLogin}>
          <p className={styles.signUpText}>Sign Up</p>
        </NavLink>
      </Frame>
    </>
  );
};
