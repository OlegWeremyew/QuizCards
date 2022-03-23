import {AxiosResponse} from "axios";
import {registerStateType} from "../m2-bll/r1-reducers/RegisterAndRecoveryPassReducer";
import {instance} from "./instance";
import {Undetectable} from "../../types/Undetectable";

export const registerAndRecoveryPassAPI = {
    async registerMe(body: { email: string, password: string }) {
        return await instance.post<registerStateType,
            AxiosResponse<registerStateType>, { email: string, password: string }>(`/auth/register`, body)
    },
    async forgot(email: string) {
        return await instance.post<ForgotResponseType>(`/auth/forgot`, {
            email,
            message: `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:3000/IFriday#/set-new-password>
link</a>
</div>`
        })
    },
    async createNewPass(body: newPassBodyType) {
        return await instance.post<SetNewResponseType,
            AxiosResponse<SetNewResponseType>, newPassBodyType>(`/auth/set-new-password`, body)
    }
}

//types=================
type ForgotResponseType = {
    info: string
    success: boolean
    answer: boolean
    html: boolean
}

export type newPassBodyType = {
    password: string
    resetPasswordToken: Undetectable<string>
}

type SetNewResponseType = {
    info: string
    error: string
}