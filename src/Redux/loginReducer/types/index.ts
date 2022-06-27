import { LoginAction } from 'Redux/loginReducer';
import { InferActionTypes } from 'Redux/types';

export type initialStateLoginType = {
  status: boolean;
};

export type AuthActionsType = InferActionTypes<typeof LoginAction>;
