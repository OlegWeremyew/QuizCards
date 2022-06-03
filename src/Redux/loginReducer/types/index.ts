import { InferActionTypes } from '../../types';
import { LoginAction } from '../loginAction';

export type initialStateLoginType = {
  status: boolean;
};

export type AuthActionsType = InferActionTypes<typeof LoginAction>;
