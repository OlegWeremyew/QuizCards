import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { EMPTY_STRING } from '../../../constants';
import { PATH } from '../../../constants/routes';
import { AppAction } from '../../../Redux/appReducer';
import { registerAction, registerTC } from '../../../Redux/registerReducer';
import {
  getErrorAppSelector,
  getIsLoadingAppSelector,
  getIsRegisteredRegisterSelector,
} from '../../../selectors';
import { ReturnComponentType } from '../../../types';
import {
  Frame,
  Preloader,
  SuperButton,
  SuperInputPassword,
  SuperInputText,
} from '../../../ui';

import s from './Registration.module.scss';

export const Registration = (): ReturnComponentType => {
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
      {loading && <Preloader />}
      <Frame>
        <span>
          <strong>It-incubator</strong>
        </span>
        <h2>Sign up</h2>
        {error && <div className={s.error}>{error}</div>}
        <div className={s.input}>
          <label>Email</label>
          <SuperInputText value={email} onChangeText={setEmail} />
        </div>
        <div className={s.input}>
          <label>Password</label>
          <SuperInputPassword value={password} onChangeText={setPassword} />
        </div>
        <div className={s.input}>
          <label>Confirm password</label>
          <SuperInputPassword value={confirmPassword} onChangeText={setConfirmPassword} />
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
