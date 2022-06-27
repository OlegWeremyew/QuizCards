import { Dispatch } from 'redux';

import { authAndProfileApi } from 'api';
import { EMPTY_STRING } from 'constants/variables';
import { AppAction } from 'Redux/appReducer';
import { registerAction } from 'Redux/registerReducer';

export const registerTC =
  (email: string, password: string): any =>
  (dispatch: Dispatch) => {
    dispatch(AppAction.setLoadingAC(true));
    authAndProfileApi
      .register(email, password)
      .then(() => {
        dispatch(registerAction.setRegister(true));
        dispatch(AppAction.setErrorAC(EMPTY_STRING));
      })
      .catch(e => {
        const error = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;
        dispatch(AppAction.setErrorAC(error));
      })
      .finally(() => {
        dispatch(AppAction.setLoadingAC(false));
      });
  };
