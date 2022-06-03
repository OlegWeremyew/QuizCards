import { InferActionTypes } from '../../types';
import { AppAction } from '../appAction';

export type InitialAppStateType = {
  isInitialized: boolean;
  errorAPP: string;
  error: string;
  isLoading: boolean;
};

export type ActionAppReducerType = InferActionTypes<typeof AppAction>;
