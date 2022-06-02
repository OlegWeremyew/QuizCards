import React from 'react';
import styles from "./Modal.module.css";
import {ModalButtonsWrapPropsType} from "./types";
import {SuperButton} from "../SuperButton";

export const ModalButtonsWrap = (props: ModalButtonsWrapPropsType) => {
    return (
        <div className={styles.modalButtons}>
            <SuperButton onClick={props.closeModal} light={true}>Cancel</SuperButton>
            {props.children}
        </div>
    );
};