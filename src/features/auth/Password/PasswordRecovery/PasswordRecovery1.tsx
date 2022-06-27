import React, { FC, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import styles from './PasswordRecovery1.module.scss';

import { PATH } from 'constants/routes';
import { EMPTY_STRING } from 'constants/variables';
import { AppAction } from 'Redux/appReducer';
import { changePassTC } from 'Redux/passwordReducer';
import {
  getErrorAppSelector,
  getIsChangedPassPasswordSelector,
  getIsLoadingAppSelector,
} from 'selectors';
import { Frame, Preloader, SuperButton, SuperInputPassword } from 'ui';

export const PasswordRecovery1: FC = () => {
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
        <h2>Create new password</h2>
        {error && (
          <div className={styles.error}>
            <p>{error}</p>
          </div>
        )}
        <div className={styles.input}>
          <label className={styles.label} htmlFor="passwordRecovery">
            Password
          </label>
          <SuperInputPassword
            id="passwordRecovery"
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
