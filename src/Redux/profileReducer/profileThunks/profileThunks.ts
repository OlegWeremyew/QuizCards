import {authAndProfileApi, updateProfileRequestType} from "../../../api/authAndProfileApi";
import {Dispatch} from "redux";
import {AppAction} from "../../appReducer";
import axios from "axios";
import {profileAction} from "../profileAction";

export const updateProfile = (data: updateProfileRequestType) => (dispatch: Dispatch) => {
    dispatch(AppAction.setLoadingAC(true));
    authAndProfileApi.updateProfile(data)
        .then(res => {
            dispatch(profileAction.updateProfileData(res.data.updatedUser));
        })
        .catch(error => {
            if (axios.isAxiosError(error) && error.response) {
                dispatch(profileAction.setProfileError(error.response.data.error));
            }
        })
        .finally(() => {
            dispatch(AppAction.setLoadingAC(false));
        })
}