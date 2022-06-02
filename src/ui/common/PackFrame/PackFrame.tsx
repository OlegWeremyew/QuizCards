import React from 'react';
import styles from './PackFrame.module.css';
import {PackFramePropsType} from "./types";

export const PackFrame = (props: PackFramePropsType) => {
    return (
        <div className={styles.packFrame}>
            {props.children}
        </div>
    );
};
