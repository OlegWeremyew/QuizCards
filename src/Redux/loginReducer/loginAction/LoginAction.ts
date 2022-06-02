import {SET_IS_LOGGED_IN} from "../constants";

export const LoginAction = {
    setIsLoggedInAC(status: boolean) {
        return {
            type: SET_IS_LOGGED_IN,
            payload: {
                status: status,
            },
        } as const
    },
}