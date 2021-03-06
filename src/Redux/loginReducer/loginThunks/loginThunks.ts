import { Dispatch } from 'redux';

import { authAndProfileApi } from 'api/authAndProfileApi';
import { EMPTY_STRING } from 'constants/variables';
import { AppAction } from 'Redux/appReducer';
import { LoginAction } from 'Redux/loginReducer';
import { profileAction } from 'Redux/profileReducer';
import { profileInitialState } from 'Redux/profileReducer/profileReducer/profileReducer';

export const loginTC =
  (email: string, password: string, remember: boolean): any =>
  (dispatch: Dispatch) => {
    dispatch(AppAction.setLoadingAC(true));
    authAndProfileApi
      .login(email, password, remember)
      .then(res => {
        if (res.status === 200) {
          dispatch(profileAction.setProfileData(res.data));
          dispatch(LoginAction.setIsLoggedInAC(true));
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

export const logoutTC = (): any => (dispatch: Dispatch) => {
  dispatch(AppAction.setLoadingAC(true));
  authAndProfileApi
    .logout()
    .then(res => {
      if (res.status === 200) {
        dispatch(profileAction.setProfileData(profileInitialState));
        dispatch(LoginAction.setIsLoggedInAC(false));
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
