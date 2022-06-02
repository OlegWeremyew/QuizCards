import React from 'react';
import styles from './superLoading.module.css';
import {ReturnComponentType} from "../../../types";

export const SuperLoading = (): ReturnComponentType => {
    return (
        <>
            <div className={styles.loading_line}></div>
        </>
    )
}