import React, { FC } from 'react';

import styles from './Modal.module.scss';
import { ModalButtonsWrapPropsType } from './types';

import { SuperButton } from 'ui/common';

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
