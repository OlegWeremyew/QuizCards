import { EMPTY_STRING } from 'constants/variables';
import {
  LOADING,
  SET_ERROR,
  SET_ERROR_APP,
  SET_INITIALIZED,
} from 'Redux/appReducer/constants';
import { ActionAppReducerType, InitialAppStateType } from 'Redux/appReducer/types';

export const initialAppState = {
  isInitialized: false,
  errorAPP: EMPTY_STRING,
  error: EMPTY_STRING,
  isLoading: false,
};

export const appReducer = (
  state: InitialAppStateType = initialAppState,
  action: ActionAppReducerType,
): InitialAppStateType => {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: action.payload.value };
    case SET_ERROR_APP:
      return { ...state, errorAPP: action.payload.errorAPP };
    case SET_ERROR:
      return { ...state, error: action.payload.error };
    case SET_INITIALIZED:
      return { ...state, isInitialized: action.payload.isInitialized };
    default:
      return state;
  }
};
