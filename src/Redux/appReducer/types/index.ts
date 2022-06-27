import { AppAction } from 'Redux/appReducer';
import { InferActionTypes } from 'Redux/types';

export type InitialAppStateType = {
  isInitialized: boolean;
  errorAPP: string;
  error: string;
  isLoading: boolean;
};

export type ActionAppReducerType = InferActionTypes<typeof AppAction>;
