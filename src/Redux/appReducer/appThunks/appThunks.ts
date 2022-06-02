import {Dispatch} from "redux";
import {authAndProfileApi} from "../../../api/authAndProfileApi/authAndProfileApi";
import {AppAction} from "../appAction";
import {LoginAction} from "../../loginReducer";
import {profileAction} from "../../profileReducer";

export const initializeAppTC = (): any => {
    return (dispatch: Dispatch) => {
        authAndProfileApi.me()
            .then((res) => {
                dispatch(profileAction.setProfileData(res.data))
                dispatch(LoginAction.setIsLoggedInAC(true));
            })
            .catch(e => {
                const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
                dispatch(AppAction.setErrorAPPAC(error))
            })
            .finally(() => {
                dispatch(AppAction.setIsInitializedAC(true));
            })
    }
};