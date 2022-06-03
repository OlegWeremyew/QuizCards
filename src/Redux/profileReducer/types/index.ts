import { InferActionTypes } from '../../types';
import { profileAction } from '../profileAction';

export type ProfileActionsType = InferActionTypes<typeof profileAction>;
