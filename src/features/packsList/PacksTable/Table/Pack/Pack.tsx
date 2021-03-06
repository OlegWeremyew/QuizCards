import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from '../PacksTable.module.scss';

import { PackPropsType } from './types';

import { EMPTY_STRING } from 'constants/variables';
import { ModalType } from 'features/cards/CardsTable/Table/Card/types';
import { deletePackTC, editPackTC } from 'Redux/cardsPackReducer';
import { get_idProfileSelector, getIsLoadingAppSelector } from 'selectors';
import { ReturnComponentType } from 'types';
import { Modal, ModalButtonsWrap, SuperButton, SuperInputText, SuperLoading } from 'ui';

export const Pack: React.FC<PackPropsType> = ({ pack }): ReturnComponentType => {
  const dispatch = useDispatch();

  const myUserId = useSelector(get_idProfileSelector);
  const isLoading = useSelector(getIsLoadingAppSelector);

  const [newPackName, setNewPackName] = useState<string>(pack.name);
  const [isShownModal, setIsShownModal] = useState<boolean>(false);

  const [modalType, setModalType] = useState<ModalType>(EMPTY_STRING);
  const closeModal = (): void => setIsShownModal(false);
  const showModal = (modalType: ModalType): void => {
    setIsShownModal(true);
    setModalType(modalType);
  };

  const deletePack = (): void => {
    setIsShownModal(false);
    dispatch(deletePackTC(pack._id));
  };

  const editPack = (): void => {
    dispatch(editPackTC(pack._id, newPackName));
    closeModal();
  };

  if (isLoading) {
    return <SuperLoading />;
  }

  return (
    <div className={`${styles.pack} ${styles.item}`}>
      <NavLink className={styles.textLink} to={`/cards/${pack._id}`}>
        {pack.name}
      </NavLink>
      <div>{pack.cardsCount}</div>
      <div className={styles.packUpdate}>{pack.updated.slice(0, 10)}</div>
      <div>{pack.user_name}</div>
      <div className={styles.buttons}>
        <NavLink
          to={`/learn/${pack._id}`}
          className={`${!pack.cardsCount ? styles.disabled : ''} ${styles.button}`}
        >
          Learn
        </NavLink>
        {myUserId === pack.user_id && (
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
        )}
      </div>
      {modalType === 'Delete' && (
        <Modal title="Delete Pack" show={isShownModal} closeModal={closeModal}>
          <p>
            Do you really want to remove Pack Name - {pack.name}? All cards will be
            excluded from this course.
          </p>
          <ModalButtonsWrap closeModal={closeModal}>
            <SuperButton onClick={deletePack} red>
              Delete
            </SuperButton>
          </ModalButtonsWrap>
        </Modal>
      )}
      {modalType === 'Edit' && (
        <Modal title="Edit Pack" show={isShownModal} closeModal={closeModal}>
          <label className={styles.label} htmlFor="newName">
            New name
          </label>
          <SuperInputText
            id="newName"
            value={newPackName}
            onChangeText={setNewPackName}
          />
          <ModalButtonsWrap closeModal={closeModal}>
            <SuperButton onClick={editPack}>Save</SuperButton>
          </ModalButtonsWrap>
        </Modal>
      )}
    </div>
  );
};
