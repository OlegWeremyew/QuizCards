import React, { FC } from 'react';

import styles from './PackFrame.module.scss';
import { PackFramePropsType } from './types';

export const PackFrame: FC<PackFramePropsType> = ({ children }) => (
  <div className={styles.packFrame}>{children}</div>
);
