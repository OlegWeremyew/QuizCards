import React from 'react';

import { ReturnComponentType } from '../../../types';

import styles from './loading.module.css';

export const SuperLoading = (): ReturnComponentType => (
  <>
    <div className={styles.loading_line} />
  </>
);
