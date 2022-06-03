import { instance } from '../instance';

import { endPointCardsPack } from './constants';
import {
  AddCardsPackParamsType,
  GetPacksParamsType,
  PacksResponseType,
  UpdateCardsPackType,
} from './types';

export const cardsPackApi = {
  getPacks(params: Partial<GetPacksParamsType>) {
    return instance.get<PacksResponseType>(endPointCardsPack, { params: { ...params } });
  },
  addPack: (newCardsPack: Partial<AddCardsPackParamsType>) =>
    instance.post(endPointCardsPack, { cardsPack: { ...newCardsPack } }),
  deletePack: (id: string) => instance.delete(endPointCardsPack, { params: { id } }),
  updatePack: (updatedCardsPack: UpdateCardsPackType) =>
    instance.put(endPointCardsPack, { cardsPack: { ...updatedCardsPack } }),
};
