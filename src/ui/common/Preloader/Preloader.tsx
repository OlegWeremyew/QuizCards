import React from 'react';
import styles from './Preloader.module.css'
import {ReturnComponentType} from "../../../types";

export const Preloader = (): ReturnComponentType => {
    return (
        <div className={styles.preloader}>
            <figure>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </figure>
        </div>
    );
};