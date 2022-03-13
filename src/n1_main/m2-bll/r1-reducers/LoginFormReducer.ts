import {Dispatch} from "redux";
import {loginFormAPI, loginType} from "../../m3-dal/LoginFormAPI";
import {setAppStatusAC} from "./app-reducer";
import {
    LoginFormActions,
    LoginFormInitialState,
    LoginFormReducer,
    LoginFormReducerReducerActionsTypes,
    LoginInitialStateType
} from "../r2-actions/ActionLoginForm";
import {ProfileActions} from "./ProfileReducer";

export type ActionLoginFormType = ReturnType<LoginFormReducerReducerActionsTypes<typeof LoginFormActions>>

export const loginFormReducer = (state: LoginInitialStateType = LoginFormInitialState, action: ActionLoginFormType): LoginInitialStateType => {
    switch (action.type) {
        case LoginFormReducer.LOGIN_USER:
            return {...state, isLoggedIn: action.payload.isLoggedIn}
        case LoginFormReducer.SET_USER_DATA:
            return {...state, user: action.payload.userData}
        case LoginFormReducer.SET_ERROR: {
            return {...state, error: action.payload.error}
        }
        default:
            return state
    }
}

export const loginUserTC = (body: loginType) => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        const res = await loginFormAPI.loginMe(body)
        dispatch(LoginFormActions.setUserDataAC(res.data)) // можно заменить на setProfileAC, чтоб не дублировать логику
        dispatch(ProfileActions.setProfileAC(res.data))
        dispatch(LoginFormActions.setIsLoggedInAC(true))
        // saveToken(res.data.token)
        dispatch(setAppStatusAC("succeeded"))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(LoginFormActions.setErrorAC(error))
        dispatch(setAppStatusAC("failed"))
    }
}

export const logoutUserTC = () => async (dispatch: Dispatch) => {
    try {
        await loginFormAPI.logoutMe()
        dispatch(LoginFormActions.setIsLoggedInAC(false))
        // saveToken(null)
    } catch (e) {
    }
}