import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { EMPTY_STRING } from '../../../../../constants';
import { deleteCardTC, updateCardTC } from '../../../../../Redux/cardsReducer';
import { getIsLoadingAppSelector } from '../../../../../selectors';
import {
  Modal,
  ModalButtonsWrap,
  SuperButton,
  SuperLoading,
  SuperTextArea,
} from '../../../../../ui';
import styles from '../CardsTable.module.scss';

import { CardPropsType } from './types';

export const Card: React.FC<CardPropsType> = ({ card, isCheckId, classMyCards }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingAppSelector);
  const [year, month, day] = card.updated.slice(0, 10).split('-');

  const rating = +card.grade.toFixed(0);
  const finalClass1 = `${rating >= 1 ? `${styles.active}` : ``}`;
  const finalClass2 = `${rating >= 2 ? `${styles.active}` : ``}`;
  const finalClass3 = `${rating >= 3 ? `${styles.active}` : ``}`;
  const finalClass4 = `${rating >= 4 ? `${styles.active}` : ``}`;
  const finalClass5 = `${rating >= 5 ? `${styles.active}` : ``}`;
  const { packId } = useParams<{ packId: string }>();
  const currId = packId || EMPTY_STRING;

  const [newQuestion, setNewQuestion] = useState<string>(card.question);
  const [newAnswer, setNewAnswer] = useState<string>(card.answer);
  const [isShownModal, setIsShownModal] = useState<boolean>(false);

  const [modalType, setModalType] = useState<'Delete' | 'Edit' | ''>(EMPTY_STRING);

  const closeModal = (): void => setIsShownModal(false);

  const showModal = (modalType: 'Delete' | 'Edit' | ''): void => {
    setIsShownModal(true);
    setModalType(modalType);
  };

  const deleteCard = (): void => {
    setIsShownModal(false);
    dispatch(deleteCardTC(currId, card._id));
  };

  const updateCard = (): void => {
    dispatch(updateCardTC(currId, card._id, newQuestion, newAnswer));
    closeModal();
  };

  if (isLoading) {
    return <SuperLoading />;
  }

  return (
    <div className={`${styles.card} ${classMyCards}`}>
      <div>{card.question}</div>
      <div>{card.answer}</div>
      <div>{`${day}.${month}.${year}`}</div>
      <div>
        <div className={styles.rating_result}>
          <span className={finalClass1} />
          <span className={finalClass2} />
          <span className={finalClass3} />
          <span className={finalClass4} />
          <span className={finalClass5} />
        </div>
      </div>
      {isCheckId && (
        <div className={styles.buttons}>
          <>
            <button
              type="button"
              className={styles.button}
              onClick={() => showModal('Edit')}
            >
              Edit
            </button>
            <button
              type="button"
              className={`${styles.button} ${styles.delete}`}
              onClick={() => showModal('Delete')}
            >
              Delete
            </button>
          </>
        </div>
      )}
      {modalType === 'Delete' && (
        <Modal title="Delete Card" show={isShownModal} closeModal={closeModal}>
          <p>Do you really want to remove Card?</p>
          <ModalButtonsWrap closeModal={closeModal}>
            <SuperButton onClick={deleteCard} red>
              Delete
            </SuperButton>
          </ModalButtonsWrap>
        </Modal>
      )}
      {modalType === 'Edit' && (
        <Modal title="Edit Card" show={isShownModal} closeModal={closeModal}>
          <div className={styles.textArea}>
            <label>New Question</label>
            <SuperTextArea value={newQuestion} onChangeText={setNewQuestion} />
          </div>
          <div className={styles.textArea}>
            <label>New Answer</label>
            <SuperTextArea value={newAnswer} onChangeText={setNewAnswer} />
          </div>
          <ModalButtonsWrap closeModal={closeModal}>
            <SuperButton onClick={updateCard}>Save</SuperButton>
          </ModalButtonsWrap>
        </Modal>
      )}
    </div>
  );
};
