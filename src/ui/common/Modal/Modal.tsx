import React from 'react';

import { ReturnComponentType } from '../../../types';

import styles from './Modal.module.css';
import { ModalPropsType } from './types';

export const Modal: React.FC<ModalPropsType> = ({
  show,
  closeModal,
  title,
  children,
}): ReturnComponentType => {
  if (!show) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={closeModal} />
      <div className={styles.dialog}>
        {title && <h3>{title}</h3>}
        <div className={styles.content}>{children}</div>
        <button type="button" className={styles.close} onClick={closeModal}>
          x
        </button>
      </div>
    </div>
  );
};
