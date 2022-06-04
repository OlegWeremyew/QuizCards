import React from 'react';

import { ReturnComponentType } from '../../../types';

import styles from './Loading.module.scss';

export const SuperLoading = (): ReturnComponentType => (
  <>
    <div className={styles.loading_line} />
  </>
);
