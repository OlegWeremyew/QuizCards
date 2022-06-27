import { profileAction } from 'Redux/profileReducer';
import { InferActionTypes } from 'Redux/types';

export type ProfileActionsType = InferActionTypes<typeof profileAction>;
