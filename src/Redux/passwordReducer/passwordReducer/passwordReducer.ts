import { EMPTY_STRING } from 'constants/variables';
import { SEND_EMAIL, SET_IS_CHANGED_PASSWORD } from 'Redux/passwordReducer/constants';
import {
  InitialPasswordStateType,
  PasswordActionsType,
} from 'Redux/passwordReducer/types';

const initialPasswordState = {
  isSend: false,
  email: EMPTY_STRING,
  isChangedPass: false,
};

export const passwordReducer = (
  state: InitialPasswordStateType = initialPasswordState,
  action: PasswordActionsType,
): InitialPasswordStateType => {
  switch (action.type) {
    case SEND_EMAIL:
      return {
        ...state,
        isSend: action.payload.isSend,
        email: action.payload.email,
      };
    case SET_IS_CHANGED_PASSWORD:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
