import React from 'react';

import { ReturnComponentType } from '../../../types';

import styles from './Preloader.module.css';

export const Preloader = (): ReturnComponentType => (
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