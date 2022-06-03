import { Dispatch } from 'redux';

import { cardsPackApi } from '../../../api';
import { EMPTY_STRING } from '../../../constants';
import { AppAction } from '../../appReducer';
import { AppRootStateType } from '../../store';
import { cardsPackAction } from '../cardsPackAction';

export const fetchPacksListsTC =
  () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    dispatch(AppAction.setLoadingAC(true));

    // eslint-disable-next-line prefer-const
    let { packName, min, max, sortPacks, page, pageCount, myPacks, user_id } =
      getState().cardsPack;
    const myUserId = getState().profilePage._id;

    user_id = myPacks ? myUserId : user_id;

    const payload = { packName, min, max, sortPacks, page, pageCount, user_id };

    cardsPackApi
      .getPacks(payload)
      .then(res => {
        dispatch(cardsPackAction.setPacksListsAC(res.data));
      })
      .catch(e => {
        const error = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;
        dispatch(AppAction.setErrorAC(error));
      })
      .finally(() => {
        dispatch(AppAction.setLoadingAC(false));
      });
  };

export const deletePackTC =
  (packId: string): any =>
  (dispatch: any) => {
    dispatch(AppAction.setLoadingAC(true));

    cardsPackApi
      .deletePack(packId)
      .then(() => {
        dispatch(fetchPacksListsTC());
      })
      .catch(e => {
        const error = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;
        dispatch(AppAction.setErrorAC(error));
        dispatch(AppAction.setLoadingAC(false));
      });
  };

export const addPackTC =
  (packName: string, privateValue: boolean): any =>
  (dispatch: any) => {
    dispatch(AppAction.setLoadingAC(true));
    dispatch(cardsPackAction.sortPacksAC('0updated'));

    const payload = {
      name: packName,
      deckCover: EMPTY_STRING,
      private: privateValue,
    };

    cardsPackApi
      .addPack(payload)
      .then(() => {
        dispatch(fetchPacksListsTC());
      })
      .catch(e => {
        const error = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;
        dispatch(AppAction.setErrorAC(error));
        dispatch(AppAction.setLoadingAC(false));
      });
  };

export const editPackTC =
  (_id: string, packName: string): any =>
  (dispatch: any) => {
    dispatch(AppAction.setLoadingAC(true));

    const payload = {
      _id,
      name: packName,
    };

    cardsPackApi
      .updatePack(payload)
      .then(() => {
        dispatch(fetchPacksListsTC());
      })
      .catch(e => {
        const error = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;
        dispatch(AppAction.setErrorAC(error));
      });
  };
