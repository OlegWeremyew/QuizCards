import { CardType } from '../../../../../../api/cardsApi/types';

export type CardPropsType = {
  card: CardType;
  isCheckId: boolean;
  classMyCards: string;
};

export type ModalType = 'Delete' | 'Edit' | '';
