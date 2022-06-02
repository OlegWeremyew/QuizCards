import {instance} from "../instance";
import {AddCardsPackParamsType, GetPacksParamsType, PacksResponseType, UpdateCardsPackType} from "./types";
import {endPointCardsPack} from "./constants";

export const cardsPackApi = {
    getPacks(params: Partial<GetPacksParamsType>) {
        return instance.get<PacksResponseType>(endPointCardsPack, {params: {...params}});
    },
    addPack: (newCardsPack: Partial<AddCardsPackParamsType>) => {
        return instance.post(endPointCardsPack, {cardsPack: {...newCardsPack}})
    },
    deletePack: (id: string) => {
        return instance.delete(endPointCardsPack, {params: {id: id}})
    },
    updatePack: (updatedCardsPack: UpdateCardsPackType) => {
        return instance.put(endPointCardsPack, {cardsPack: {...updatedCardsPack}})
    },
}

