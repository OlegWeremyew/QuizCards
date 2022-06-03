import { Dispatch } from 'redux';

import { ActionAppReducerType } from '../../Redux/appReducer/types';

export const sortFields = (
  field: string,
  sortAC: (sortItems: string) => {},
  loading: boolean,
  value: string,
  dispatch: Dispatch<ActionAppReducerType>,
): void => {
  if (loading) return;
  if (value.slice(1) !== field) {
    dispatch(<ActionAppReducerType>sortAC(`0${field}`));
  } else if (value[0] !== '0') {
    dispatch(<ActionAppReducerType>sortAC(`0${field}`));
  } else {
    dispatch(<ActionAppReducerType>sortAC(`1${field}`));
  }
};
