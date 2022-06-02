import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "./appReducer";
import {loginReducer} from "./loginReducer";
import {profileReducer} from "./profileReducer";
import {registerReducer} from "./registerReducer";
import {cardsPackReducer} from "./cardsPackReducer";
import {cardsReducer} from "./cardsReducer";
import {passwordReducer} from "./passwordReducer";

const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
    register: registerReducer,
    profilePage: profileReducer,
    recovery: passwordReducer,
    cardsPack: cardsPackReducer,
    cards: cardsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>
