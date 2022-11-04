import React, { FC, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { btnStyle, grades, initialState } from './data';
import stl from './Learn.module.scss';

import { CardType } from 'api/cardsApi/types';
import { PATH } from 'constants/routes';
import { EMPTY_STRING } from 'constants/variables';
import { cardsAction, CardsGradeTC, learnCardsTC } from 'Redux/cardsReducer';
import { AppRootStateType } from 'Redux/store';
import { getCardsCardsSelector, getIsLoadingAppSelector } from 'selectors';
import { Frame, Preloader, SuperButton, SuperRadio } from 'ui';
import Header from 'ui/header/Header';
import { Helmet } from 'react-helmet';

const getCard = (cards: CardType[]): CardType => {
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

export const Learn: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { packId } = useParams<{ packId: string }>();

  const cards = useSelector(getCardsCardsSelector);
  const packName = useSelector<AppRootStateType, string>(
    state => state.cardsPack.cardPacks.filter((p: any) => p._id === packId)[0]?.name,
  );
  const loading = useSelector(getIsLoadingAppSelector);

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [rating, setRating] = useState<string>(EMPTY_STRING);
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
      <Helmet>
        <title>learn</title>
        <meta name="description" content="learn cards" />
      </Helmet>
      <Header />
      {loading ? (
        <Preloader />
      ) : (
        <Frame>
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
