import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {authReducer} from "../reducers/authReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

//types
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore

window.store = store