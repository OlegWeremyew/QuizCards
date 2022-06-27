import { SET_IS_LOGGED_IN } from 'Redux/loginReducer/constants';
import { AuthActionsType, initialStateLoginType } from 'Redux/loginReducer/types';

export const initialStateLogin: initialStateLoginType = {
  status: false,
};

export const loginReducer = (
  state: initialStateLoginType = initialStateLogin,
  action: AuthActionsType,
): initialStateLoginType => {
  switch (action.type) {
    case SET_IS_LOGGED_IN:
      return {
        ...state,
        status: action.payload.status,
      };
    default: {
      return state;
    }
  }
};
