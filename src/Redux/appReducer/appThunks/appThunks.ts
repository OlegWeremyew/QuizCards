import { Dispatch } from 'redux';

import { authAndProfileApi } from 'api/authAndProfileApi';
import { AppAction } from 'Redux/appReducer';
import { LoginAction } from 'Redux/loginReducer';
import { profileAction } from 'Redux/profileReducer';

export const initializeAppTC = (): Function => (dispatch: Dispatch) => {
  authAndProfileApi
    .me()
    .then(res => {
      dispatch(profileAction.setProfileData(res.data));
      dispatch(LoginAction.setIsLoggedInAC(true));
    })
    .catch(e => {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(AppAction.setErrorAPPAC(error));
    })
    .finally(() => {
      dispatch(AppAction.setIsInitializedAC(true));
    });
};
