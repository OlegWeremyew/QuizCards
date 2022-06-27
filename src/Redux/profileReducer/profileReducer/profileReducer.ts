import { UserResponseType } from 'api/authAndProfileApi/types';
import { EMPTY_STRING } from 'constants/variables';
import {
  SET_PROFILE_DATA,
  SET_PROFILE_DELETE_DATA,
  SET_PROFILE_ERROR,
  UPDATE_PROFILE_DATA,
} from 'Redux/profileReducer/constants';
import { ProfileActionsType } from 'Redux/profileReducer/types';

export const profileInitialState: UserResponseType = {
  _id: EMPTY_STRING,
  email: EMPTY_STRING,
  name: EMPTY_STRING,
  avatar: EMPTY_STRING,
  publicCardPacksCount: 0,
  isAdmin: false,
  verified: false,
  rememberMe: false,
  error: EMPTY_STRING,
  token: EMPTY_STRING,
  created: null,
  updated: null,
};

export const profileReducer = (
  state = profileInitialState,
  action: ProfileActionsType,
): UserResponseType => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      return { ...state, ...action.payload.data };
    case UPDATE_PROFILE_DATA:
      return {
        ...state,
        name: action.payload.data.name,
        avatar: action.payload.data.avatar,
      };
    case SET_PROFILE_ERROR:
      return { ...state, error: action.payload.error };
    case SET_PROFILE_DELETE_DATA:
      return profileInitialState;
    default:
      return state;
  }
};
