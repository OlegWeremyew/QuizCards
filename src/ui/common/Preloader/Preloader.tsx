import React, { FC } from 'react';

import styles from './Preloader.module.scss';

export const Preloader: FC = () => (
  <div className={styles.preloader}>
    <figure>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </figure>
  </div>
);
