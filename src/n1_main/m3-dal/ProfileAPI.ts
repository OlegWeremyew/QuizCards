import {AxiosResponse} from "axios";
import {UserDataType} from "../m2-bll/r2-actions/ActionLoginForm";
import {instance} from "./instance";

export const profileAPI = {
    async changeUserName(updateBody: UpdateUser) {
        return await instance.put<ProfileRespType,
            AxiosResponse<ProfileRespType>>(`/auth/me`, updateBody)
    }
}

//types

export type UpdateUser = {
    name: string,
    avatar: string
}

export type ProfileRespType = {
    updatedUser: UserDataType
    error?: string
}