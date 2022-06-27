import { registerAction } from 'Redux/registerReducer';
import { InferActionTypes } from 'Redux/types';

export type InitialRegisterStateType = {
  isRegistered: boolean;
};

export type RegisterActionsType = InferActionTypes<typeof registerAction>;
