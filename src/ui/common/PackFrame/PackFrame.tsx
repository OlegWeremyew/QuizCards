import React from 'react';

import { ReturnComponentType } from '../../../types';

import styles from './PackFrame.module.css';
import { PackFramePropsType } from './types';

export const PackFrame: React.FC<PackFramePropsType> = ({
  children,
}): ReturnComponentType => <div className={styles.packFrame}>{children}</div>;
