import React from 'react';

import { SuperButton } from '../SuperButton';

import styles from './Modal.module.css';
import { ModalButtonsWrapPropsType } from './types';

export const ModalButtonsWrap: React.FC<ModalButtonsWrapPropsType> = ({
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
