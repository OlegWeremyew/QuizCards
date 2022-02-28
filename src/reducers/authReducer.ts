const SET_LOGGED_IN = "login/authReducer/SET_LOGGED_IN"
type initialStateType = typeof initialState

const initialState = {}

export const authReducer = (state: initialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_LOGGED_IN : {
            return state
        }
        default:
            return state
    }
}

type setLoggedIn = ReturnType<typeof setLoggedInAC>
export const setLoggedInAC = (value: boolean) => {
    return {
        type: SET_LOGGED_IN,
        payload: {value},
    } as const
}

type ActionType = setLoggedIn