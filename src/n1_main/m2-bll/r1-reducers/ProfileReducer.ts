import {Dispatch} from "redux";
import {profileAPI} from "../../m3-dal/ProfileAPI";
import {meRespType} from "../../m3-dal/meAPI";
import {setAppStatusAC} from "./app-reducer";

export enum PROFILE {
    SET_PROFILE = 'CARDS/PROFILE/SET_PROFILE',
    SET_ERROR = 'CARDS/PROFILE/SET_ERROR'
}

// TYPES
export type ProfileInitialStateType = {
    profile: meRespType
    error: string
}
const initialProfileState = {
    profile: {} as meRespType,
    error: ''
}
export type profileReducerActionsTypes<T> = T extends { [key: string]: infer A } ? A : never
export type profileReducerTypes = ReturnType<profileReducerActionsTypes<typeof ProfileActions>>

export const profileReducer = (state: ProfileInitialStateType = initialProfileState, action: profileReducerTypes): ProfileInitialStateType => {
    switch (action.type) {
        case PROFILE.SET_PROFILE: {
            let {profile} = action.payload;
            return {...state, profile}
        }
        case PROFILE.SET_ERROR: {
            let {error} = action.payload
            return {...state, error}
        }
        default:
            return state
    }
}

// ACTIONS
export const ProfileActions = {
    setProfileAC: (profile: meRespType) => {
        return {
            type: PROFILE.SET_PROFILE,
            payload: {profile},
        } as const
    },
    setErrorAC: (error: string) => ({
        type: PROFILE.SET_ERROR,
        payload: {error},
    } as const)
}


// THUNK
export const updateUserNameTC = (newUserName: string) => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    let updateModel = {
        name: newUserName,
        avatar: ''
    }
    try {
        let res = await profileAPI.changeUserName(updateModel)
        const {updatedUser} = res.data
        dispatch(ProfileActions.setProfileAC(updatedUser))
        dispatch(setAppStatusAC("succeeded"))
        dispatch(ProfileActions.setErrorAC(''))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(ProfileActions.setErrorAC(error))
        dispatch(setAppStatusAC("failed"))
    }
}

