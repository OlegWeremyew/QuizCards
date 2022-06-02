import React from 'react';
import styles from './PacksTable.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Pack} from "./Pack";
import {ReturnComponentType} from "../../../../types";
import {EMPTY_STRING} from "../../../../constants";
import {sortFields} from "../../../../utilits";
import {cardsPackAction} from "../../../../Redux/cardsPackReducer";
import {
    getCardPacksCountCardsPackSelector,
    getIsLoadingAppSelector,
    getSortPacksCardsPackSelector
} from "../../../../selectors";

export const PacksTable = (): ReturnComponentType => {
    const dispatch = useDispatch();

    const packs = useSelector(getCardPacksCountCardsPackSelector)
    const sortPacks = useSelector(getSortPacksCardsPackSelector)
    const isLoading = useSelector(getIsLoadingAppSelector)

    const direction = sortPacks[0]
    const activeField = sortPacks.slice(1)
    const rotate = direction === "1" ? styles.up : EMPTY_STRING

    const sortFieldsPack = (field: string): void => sortFields(field, cardsPackAction.sortPacksAC, isLoading, sortPacks, dispatch)

    const sortUpdate = (): void => sortFieldsPack('updated')
    const sortName = (): void => sortFieldsPack('name')
    const sortCards = (): void => sortFieldsPack('cardsCount')
    const sortUserName = (): void => sortFieldsPack('user_name')

    return (
        <div className={styles.table}>
            <div className={`${styles.header} ${styles.item}`}>
                <div onClick={sortName} className={activeField === "name" ? `${styles.active} ${rotate}` : ""}>Name
                </div>
                <div onClick={sortCards}
                     className={activeField === "cardsCount" ? `${styles.active} ${rotate}` : ""}>Cards
                </div>
                <div onClick={sortUpdate} className={activeField === "updated" ? `${styles.active} ${rotate}` : ""}>Last
                    Updated
                </div>
                <div onClick={sortUserName}
                     className={activeField === "user_name" ? `${styles.active} ${rotate}` : ""}>Created by
                </div>
                <div>Actions</div>
            </div>
            {packs.length > 0
                ? packs.map(pack => <Pack key={pack._id} pack={pack}/>)
                : <div style={{padding: '16px 24px'}}>Ничего не найдено</div>}
        </div>
    );
};