import {Nullable} from "../../../types";

export type UserResponseType = {
    _id: string
    email: string
    name: string
    avatar: string
    publicCardPacksCount: number
    token?: string
    created: Nullable<Date>
    updated: Nullable<Date>
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
}

export type LogoutResponseType = {
    info: string
    error: string
}

export type RegistrationResponseType = {
    addedUser: any,
    error?: string
}

export type updateProfileRequestType = {
    name?: string
    avatar?: string
}
export type updateProfileResponseType = {
    updatedUser: UserResponseType
    error?: string
}