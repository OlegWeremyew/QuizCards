import React, { FC } from 'react';

import { SuperButton } from '../SuperButton';

import styles from './Modal.module.scss';
import { ModalButtonsWrapPropsType } from './types';

export const ModalButtonsWrap: FC<ModalButtonsWrapPropsType> = ({
  closeModal,
  children,
}) => (
  <div className={styles.modalButtons}>
    <SuperButton onClick={closeModal} light>
      Cancel
    </SuperButton>
    {children}
  </div>
);
