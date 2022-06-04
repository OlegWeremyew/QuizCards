import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import { EMPTY_STRING } from '../../../../constants';
import { PATH } from '../../../../constants/routes';
import { AppAction } from '../../../../Redux/appReducer';
import { changePassTC } from '../../../../Redux/passwordReducer';
import {
  getErrorAppSelector,
  getIsChangedPassPasswordSelector,
  getIsLoadingAppSelector,
} from '../../../../selectors';
import { ReturnComponentType } from '../../../../types';
import { Frame, Preloader, SuperButton, SuperInputPassword } from '../../../../ui';

import styles from './PasswordRecovery1.module.scss';

export const PasswordRecovery1 = (): ReturnComponentType => {
  const [password, setPassword] = useState<string>(EMPTY_STRING);

  const isChangedPass = useSelector(getIsChangedPassPasswordSelector);
  const error = useSelector(getErrorAppSelector);
  const loading = useSelector(getIsLoadingAppSelector);

  const dispatch = useDispatch();

  const { token } = useParams<{ token: string }>();

  useEffect(() => {
    dispatch(AppAction.setErrorAC(EMPTY_STRING));
  }, []);

  const newPasswordHandler = (): void => {
    dispatch(changePassTC(password, token));
  };

  if (isChangedPass) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <>
      {loading && <Preloader />}
      <Frame>
        <span>
          <strong>It-incubator</strong>
        </span>
        <h2>Create new password</h2>
        {error && (
          <div className={styles.error}>
            <p>{error}</p>
          </div>
        )}
        <div className={styles.input}>
          <label>Password</label>
          <SuperInputPassword
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          />
        </div>
        <p>Create new password and we will send you further instructions to email</p>
        <SuperButton onClick={newPasswordHandler} style={{ padding: '10px 60px' }}>
          Create new password
        </SuperButton>
      </Frame>
    </>
  );
};
