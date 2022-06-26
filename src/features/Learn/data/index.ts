import { CardType } from '../../../api/cardsApi/types';
import { EMPTY_STRING } from '../../../constants';

export const grades = [
  'Did not know',
  'Forgot',
  'A lot of thought',
  'Confused',
  'Knew the answer',
];

export const initialState: CardType = {
  _id: EMPTY_STRING,
  cardsPack_id: EMPTY_STRING,
  user_id: EMPTY_STRING,
  answer: EMPTY_STRING,
  question: EMPTY_STRING,
  grade: 0,
  shots: 0,
  comments: EMPTY_STRING,
  type: EMPTY_STRING,
  rating: 0,
  more_id: EMPTY_STRING,
  created: EMPTY_STRING,
  updated: EMPTY_STRING,
  __v: 0,
  answerImg: EMPTY_STRING,
  answerVideo: EMPTY_STRING,
  questionImg: EMPTY_STRING,
  questionVideo: EMPTY_STRING,
};

export const btnStyle = {
  width: '150px',
  padding: '0',
};
