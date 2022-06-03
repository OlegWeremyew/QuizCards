import React from 'react';

import { ReturnComponentType } from '../../../types';

import styles from './Frame.module.css';
import { FramePropsType } from './types';

export const Frame: React.FC<FramePropsType> = ({ children }): ReturnComponentType => (
  <div className={styles.wrapper}>
    <div className={styles.frame}>{children}</div>
  </div>
);
