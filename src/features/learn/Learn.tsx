import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { CardType } from '../../api/cardsApi/types';
import { EMPTY_STRING } from '../../constants';
import { PATH } from '../../constants/routes';
import { cardsAction, CardsGradeTC, learnCardsTC } from '../../Redux/cardsReducer';
import { AppRootStateType } from '../../Redux/store';
import { getCardsCardsSelector, getIsLoadingAppSelector } from '../../selectors';
import { ReturnComponentType } from '../../types';
import { Frame, Preloader, SuperButton, SuperRadio } from '../../ui';
import Header from '../../ui/header/Header';

import stl from './Learn.module.css';

const grades = [
  'Did not know',
  'Forgot',
  'A lot of thought',
  'Confused',
  'Knew the answer',
];

const getCard = (cards: CardType[]): any => {
  const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
  const rand = Math.random() * sum;
  const res = cards.reduce(
    (acc: { sum: number; id: number }, card, i) => {
      const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
      return { sum: newSum, id: newSum < rand ? i : acc.id };
    },
    { sum: 0, id: -1 },
  );

  return cards[res.id + 1];
};

const initialState: CardType = {
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

const btnStyle = {
  width: '150px',
  padding: '0',
};

export const Learn = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { packId } = useParams<{ packId: string }>();

  const cards = useSelector(getCardsCardsSelector);
  const packName = useSelector<AppRootStateType, string>(
    state => state.cardsPack.cardPacks.filter((p: any) => p._id === packId)[0]?.name,
  );
  const loading = useSelector(getIsLoadingAppSelector);

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [rating, setRating] = useState(EMPTY_STRING);
  const [card, setCard] = useState<CardType>(initialState);

  useEffect(() => {
    packId && dispatch(learnCardsTC(packId));
    return () => {
      dispatch(cardsAction.clearCardsAC());
    };
  }, []);

  useEffect(() => {
    if (cards.length > 0) setCard(getCard(cards));
  }, [cards]);

  const onNext = (): void => {
    if (rating) {
      setIsChecked(false);
      setRating(EMPTY_STRING);

      dispatch(CardsGradeTC(card._id, grades.findIndex(el => el === rating) + 1));
    }
  };

  const cancelHandler = (): void => {
    navigate(PATH.PACKS, { replace: true });
  };

  return (
    <>
      <Header />
      {loading ? (
        <Preloader />
      ) : (
        <Frame>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h2>Learn "{packName}"</h2>
          <div>
            <div className={stl.block}>
              <b>Question:</b> {card.question}
            </div>

            {isChecked && (
              <>
                <div className={stl.radioBlock}>
                  <div className={`${stl.gap} ${stl.block}`}>
                    <b>Answer: </b> {card.answer}
                  </div>
                  <div>
                    <b>Rate yourself:</b>
                  </div>
                  <SuperRadio
                    name="radio"
                    options={grades}
                    value={rating}
                    onChangeOption={setRating}
                  />
                </div>
              </>
            )}
          </div>
          <div className={stl.btnBlock}>
            <SuperButton onClick={cancelHandler} light>
              Cancel
            </SuperButton>
            {isChecked ? (
              <SuperButton onClick={onNext} disabled={!rating}>
                Next
              </SuperButton>
            ) : (
              <SuperButton onClick={() => setIsChecked(true)} style={btnStyle}>
                Show answer
              </SuperButton>
            )}
          </div>
        </Frame>
      )}
    </>
  );
};
