import { InferActionTypes } from '../../types';
import { registerAction } from '../registerAction';

export type InitialRegisterStateType = {
  isRegistered: boolean;
};

export type RegisterActionsType = InferActionTypes<typeof registerAction>;
