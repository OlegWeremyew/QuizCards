import React, { ChangeEvent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { EMPTY_STRING } from '../../constants';
import { PATH } from '../../constants/routes';
import { updateProfile } from '../../Redux/profileReducer';
import {
  getAvatarProfileSelector,
  getEmailProfileSelector,
  getErrorProfileSelector,
  getIsLoadingAppSelector,
  getNameProfileSelector,
  getPublicCardPacksCountProfileSelector,
  getStatusLoginSelector,
} from '../../selectors';
import { ReturnComponentType } from '../../types';
import { Frame, Modal, Preloader, SuperButton, SuperEditableSpan } from '../../ui';
import Header from '../../ui/header/Header';

import { AvatarFileReader } from './AvatarFileReader';
import noAvatar from './images/noAvatar.png';
import styles from './Profile.module.scss';

export const Profile = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const profileName = useSelector(getNameProfileSelector);
  const profileAvatar = useSelector(getAvatarProfileSelector);
  const profileEmail = useSelector(getEmailProfileSelector);
  const packsNumber = useSelector(getPublicCardPacksCountProfileSelector);
  const error = useSelector(getErrorProfileSelector);
  const isLoggedIn = useSelector(getStatusLoginSelector);
  const loading = useSelector(getIsLoadingAppSelector);

  const [name, setName] = useState(profileName);
  const [localErr, setLocalErr] = useState<string>(EMPTY_STRING);

  const onBlurNameHandler = (): void => {
    onSubmitName();
  };
  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (localErr) setLocalErr(EMPTY_STRING);
    setName(e.currentTarget.value.trim());
  };

  const onEnterHandler = (): void => {
    onSubmitName();
  };

  const onSubmitName = (): void => {
    if (name.length > 10) {
      setLocalErr('Name should be less then 11 symbols!');
      setName(profileName);
      return;
    }
    if (name && name !== profileName) {
      dispatch(updateProfile({ name }));
    }
    if (name.trim() === EMPTY_STRING) {
      setName(profileName);
    }
  };

  const [isModal, setIsModal] = useState<boolean>(false);
  const showModal = (): void => setIsModal(true);
  const closeModal = (): void => setIsModal(false);

  if (!isLoggedIn) {
    return <Navigate to={PATH.LOGIN} />;
  }
  return (
    <>
      <Header />
      {loading && <Preloader />}
      <Frame>
        <span>
          <strong>It-incubator</strong>
        </span>
        <p className={styles.profileTitle}>Your profile</p>
        <div>
          <div className={styles.avatar}>
            <img src={profileAvatar || noAvatar} alt="avatar" />
          </div>
          <div className={styles.info}>
            <span>Name: &#160;</span>
            <SuperEditableSpan
              value={name}
              type="text"
              style={{ height: '27px', width: '150px' }}
              onChange={changeNameHandler}
              onBlur={onBlurNameHandler}
              onEnter={onEnterHandler}
              autoFocus
            />
          </div>
          <div className={styles.info}>Email: {profileEmail}</div>
          <div className={styles.info}>Your packs: {packsNumber} </div>
        </div>
        <div className={styles.error}>
          {error && <span>error: {error}</span>}
          {localErr && <span>Note: {localErr}</span>}
        </div>
        <SuperButton onClick={showModal} light>
          Change avatar
        </SuperButton>
      </Frame>
      <Modal title="Profile Avatar" show={isModal} closeModal={closeModal}>
        <AvatarFileReader closeModal={closeModal} />
      </Modal>
    </>
  );
};
