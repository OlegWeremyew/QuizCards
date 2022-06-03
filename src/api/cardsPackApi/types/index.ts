export type GetPacksParamsType = {
  packName: string;
  min: number;
  max: number;
  sortPacks: string;
  page: number;
  pageCount: number;
  user_id: string;
};

export type PacksResponseType = {
  cardPacks: Array<PackType>;
  page: number;
  pageCount: number;
  cardPacksTotalCount: number;
  minCardsCount: number;
  maxCardsCount: number;
  token: string;
  tokenDeathTime: number;
};

export type PackType = {
  _id: string;
  user_id: string;
  user_name: string;
  private: boolean;
  name: string;
  path: string;
  grade: number;
  shots: number;
  deckCover?: string;
  cardsCount: number;
  type: string;
  rating: number;
  created: string;
  updated: string;
  more_id: string;
  __v: number;
};

export type AddCardsPackParamsType = {
  name: string;
  deckCover: string;
  private: boolean;
};

export type UpdateCardsPackType = {
  _id: string;
  name?: string;
};
