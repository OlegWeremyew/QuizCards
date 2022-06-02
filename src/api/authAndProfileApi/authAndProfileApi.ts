import {AxiosResponse} from 'axios';
import {instance} from "../instance";
import {
    LogoutResponseType,
    RegistrationResponseType,
    updateProfileRequestType,
    updateProfileResponseType,
    UserResponseType
} from "./types";
import {Undetectable} from "../../types";
import {
    endPointAuthForgot,
    endPointAuthLogin,
    endPointAuthMe,
    endPointAuthRegister,
    endPointAuthSet_New_Password
} from "./constants";

export const authAndProfileApi = {
    me() {
        return instance.post<UserResponseType>(endPointAuthMe)
    },
    register(email: string, password: string) {
        return instance.post<RegistrationResponseType>(endPointAuthRegister, {email, password})
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<UserResponseType>(endPointAuthLogin, {email, password, rememberMe})
    },
    logout() {
        return instance.delete<LogoutResponseType>(endPointAuthMe)
    },
    sendMail(email: string) {
        return instance.post(endPointAuthForgot, {
            email: email,
            from: "test-front-admin <anastasiyamihalenko@gmail.com>",
            message: `<div style="text-align: center; background-color: #F9F9FE; width: 50%; margin: 20px auto; border-radius: 20px; padding: 20px">
            <div style="background-color: #D7D8EF; padding: 15px; display: inline-block; border-radius: 50%">
                <img src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-Letter-business-and-marketing-bearicons-detailed-outline-bearicons.png" alt="#"/>
            </div>
            <p style="font-size: 17px; color: #2D2E46">We heard you need a password reset. Click the link below, and you'll be redirected to a site from which you can set a new password.</p>
            <a style="text-decoration: none; color: white; background-color: #21268F; outline: none; border: none; padding: 15px 20px;border-radius: 7px;"
            href='https://nastassiamikhalenka.github.io/projectcards/#/set-new-password/$token$'>Reset password</a>
        </div>`
        })
    },
    newPassword(password: string, resetPasswordToken: Undetectable<string>) {
        return instance.post<any>(endPointAuthSet_New_Password, {password, resetPasswordToken})
    },
    updateProfile(data: updateProfileRequestType) {
        return instance.put<updateProfileRequestType, AxiosResponse<updateProfileResponseType, updateProfileRequestType>, updateProfileRequestType>(endPointAuthMe, data)
    },
}
