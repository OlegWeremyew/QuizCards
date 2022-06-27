import { SET_REGISTER } from 'Redux/registerReducer/constants';
import {
  InitialRegisterStateType,
  RegisterActionsType,
} from 'Redux/registerReducer/types';

const initialRegisterState = {
  isRegistered: false,
};

export const registerReducer = (
  state: InitialRegisterStateType = initialRegisterState,
  action: RegisterActionsType,
): InitialRegisterStateType => {
  switch (action.type) {
    case SET_REGISTER:
      return { ...state, isRegistered: action.payload.isRegistered };
    default:
      return state;
  }
};
