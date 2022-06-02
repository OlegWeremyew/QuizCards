import {Dispatch} from "redux";
import {AppAction} from "../../appReducer";
import {authAndProfileApi} from "../../../api/authAndProfileApi/authAndProfileApi";
import {EMPTY_STRING} from "../../../constants";
import {registerAction} from "../registerAction";

export const registerTC = (email: string, password: string): any => {
    return (dispatch: Dispatch) => {
        dispatch(AppAction.setLoadingAC(true));
        authAndProfileApi.register(email, password)
            .then(() => {
                dispatch(registerAction.setRegister(true))
                dispatch(AppAction.setErrorAC(EMPTY_STRING))
            })
            .catch(e => {
                const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
                dispatch(AppAction.setErrorAC(error))
            })
            .finally(() => {
                dispatch(AppAction.setLoadingAC(false));
            })
    }
};