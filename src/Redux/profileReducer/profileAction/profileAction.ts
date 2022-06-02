import {SET_PROFILE_DATA, SET_PROFILE_DELETE_DATA, SET_PROFILE_ERROR, UPDATE_PROFILE_DATA} from "../constants";
import {UserResponseType} from "../../../api/authAndProfileApi/types";

export const profileAction = {
    setProfileData(data: UserResponseType) {
        return {
            type: SET_PROFILE_DATA,
            payload: {
                data,
            },
        } as const
    },
    updateProfileData(data: UserResponseType) {
        return {
            type: UPDATE_PROFILE_DATA,
            payload: {
                data
            }
        } as const
    },
    setProfileError(error: string) {
        return {
            type: SET_PROFILE_ERROR,
            payload: {
                error
            }
        } as const
    },
    setProfileDeleteData() {
        return {
            type: SET_PROFILE_DELETE_DATA
        } as const
    },
}