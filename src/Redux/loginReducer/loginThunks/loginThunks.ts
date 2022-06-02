import {Dispatch} from "redux";
import {AppAction} from "../../appReducer";
import {authAndProfileApi} from "../../../api/authAndProfileApi/authAndProfileApi";
import {profileInitialState} from "../../profileReducer/profileReducer/profileReducer";
import {EMPTY_STRING} from "../../../constants";
import {LoginAction} from "../loginAction";
import {profileAction} from "../../profileReducer";

export const loginTC = (email: string, password: string, remember: boolean): any => {
    return (dispatch: Dispatch) => {
        dispatch(AppAction.setLoadingAC(true));
        authAndProfileApi.login(email, password, remember)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(profileAction.setProfileData(res.data))
                    dispatch(LoginAction.setIsLoggedInAC(true))
                    dispatch(AppAction.setErrorAC(EMPTY_STRING))
                }
            })
            .catch(e => {
                dispatch(AppAction.setErrorAC(e.response ? e.response.data.error : e.message))
            })
            .finally(() => {
                dispatch(AppAction.setLoadingAC(false));
            })
    }
};

export const logoutTC = (): any => {
    return (dispatch: Dispatch) => {
        dispatch(AppAction.setLoadingAC(true));
        authAndProfileApi.logout()
            .then((res) => {
                if (res.status === 200) {
                    dispatch(profileAction.setProfileData(profileInitialState))
                    dispatch(LoginAction.setIsLoggedInAC(false))
                    dispatch(AppAction.setErrorAC(EMPTY_STRING))
                }
            })
            .catch(e => {
                dispatch(AppAction.setErrorAC(e.response ? e.response.data.error : e.message))
            })
            .finally(() => {
                dispatch(AppAction.setLoadingAC(false));
            })
    }
};