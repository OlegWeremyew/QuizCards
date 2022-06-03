import { Dispatch } from 'redux';

import { authAndProfileApi } from '../../../api';
import { LoginAction } from '../../loginReducer';
import { profileAction } from '../../profileReducer';
import { AppAction } from '../appAction';

export const initializeAppTC = (): any => (dispatch: Dispatch) => {
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
