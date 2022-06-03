import { Dispatch } from 'redux';

import { authAndProfileApi } from '../../../api';
import { EMPTY_STRING } from '../../../constants';
import { Undetectable } from '../../../types';
import { AppAction } from '../../appReducer';
import { passwordAction } from '../passwordAction';

export const passwordForgotTC =
  (email: string): any =>
  (dispatch: Dispatch) => {
    dispatch(AppAction.setLoadingAC(true));
    authAndProfileApi
      .sendMail(email)
      .then(res => {
        if (res.status === 200) {
          dispatch(passwordAction.passwordForgotAC(true, email));
          dispatch(AppAction.setErrorAC(EMPTY_STRING));
        }
      })
      .catch(e => {
        dispatch(AppAction.setErrorAC(e.response ? e.response.data.error : e.message));
      })
      .finally(() => {
        dispatch(AppAction.setLoadingAC(false));
      });
  };

export const changePassTC =
  (newPassword: string, token: Undetectable<string>): any =>
  (dispatch: Dispatch) => {
    dispatch(AppAction.setLoadingAC(true));
    authAndProfileApi
      .newPassword(newPassword, token)
      .then(res => {
        if (res.status === 200) {
          dispatch(passwordAction.setIsChangedPassAC(true));
          dispatch(AppAction.setErrorAC(EMPTY_STRING));
        }
      })
      .catch(e => {
        dispatch(AppAction.setErrorAC(e.response ? e.response.data.error : e.message));
      })
      .finally(() => {
        dispatch(AppAction.setLoadingAC(false));
      });
  };
