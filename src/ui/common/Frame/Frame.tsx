import React, { FC } from 'react';

import styles from './Frame.module.scss';
import { FramePropsType } from './types';

export const Frame: FC<FramePropsType> = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.frame}>{children}</div>
  </div>
);
