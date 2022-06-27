import { passwordAction } from 'Redux/passwordReducer';
import { InferActionTypes } from 'Redux/types';

export type InitialPasswordStateType = {
  isSend: boolean;
  email: string;
  isChangedPass: boolean;
};

export type PasswordActionsType = InferActionTypes<typeof passwordAction>;
