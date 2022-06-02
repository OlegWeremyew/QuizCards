import React from 'react';
import styles from './Frame.module.css';
import {FramePropsType} from "./types";
import {ReturnComponentType} from "../../../types";

export const Frame = (props: FramePropsType):ReturnComponentType => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.frame}>
                {props.children}
            </div>
        </div>
    );
};
