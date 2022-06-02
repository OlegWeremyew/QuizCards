import {SEND_EMAIL, SET_IS_CHANGED_PASSWORD} from "../constants";

export const passwordAction = {
    passwordForgotAC(isSend: boolean, email: string) {
        return {
            type: SEND_EMAIL,
            payload: {
                isSend,
                email,
            },
        } as const
    },
    setIsChangedPassAC(isChangedPass: boolean) {
        return {
            type: SET_IS_CHANGED_PASSWORD,
            payload: {
                isChangedPass: isChangedPass
            },
        } as const
    },
}


