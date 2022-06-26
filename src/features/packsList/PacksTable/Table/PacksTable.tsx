import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { EMPTY_STRING } from '../../../../constants';
import { cardsPackAction } from '../../../../Redux/cardsPackReducer';
import {
  getCardPacksCountCardsPackSelector,
  getIsLoadingAppSelector,
  getSortPacksCardsPackSelector,
} from '../../../../selectors';
import { sortFields } from '../../../../utilits';

import { Pack } from './Pack';
import styles from './PacksTable.module.scss';

export const PacksTable: FC = () => {
  const dispatch = useDispatch();

  const packs = useSelector(getCardPacksCountCardsPackSelector);
  const sortPacks = useSelector(getSortPacksCardsPackSelector);
  const isLoading = useSelector(getIsLoadingAppSelector);

  const direction = sortPacks[0];
  const activeField = sortPacks.slice(1);
  const rotate = direction === '1' ? styles.up : EMPTY_STRING;

  const sortFieldsPack = (field: string): void =>
    sortFields(field, cardsPackAction.sortPacksAC, isLoading, sortPacks, dispatch);

  const SortUpdateStyle =
    activeField === 'updated' ? `${styles.active} ${rotate}` : EMPTY_STRING;
  const SortUserNameStyle =
    activeField === 'user_name' ? `${styles.active} ${rotate}` : EMPTY_STRING;
  const SortNameStyle =
    activeField === 'name' ? `${styles.active} ${rotate}` : EMPTY_STRING;
  const SortCardsCountStyle =
    activeField === 'cardsCount' ? `${styles.active} ${rotate}` : EMPTY_STRING;

  const sortUpdate = (): void => sortFieldsPack('updated');
  const sortName = (): void => sortFieldsPack('name');
  const sortCards = (): void => sortFieldsPack('cardsCount');
  const sortUserName = (): void => sortFieldsPack('user_name');

  return (
    <div className={styles.table}>
      <div className={`${styles.header} ${styles.item}`}>
        <div onClick={sortName} className={SortNameStyle}>
          Name
        </div>
        <div onClick={sortCards} className={SortCardsCountStyle}>
          Cards
        </div>
        <div onClick={sortUpdate} className={SortUpdateStyle}>
          Last Updated
        </div>
        <div onClick={sortUserName} className={SortUserNameStyle}>
          Created by
        </div>
        <div>Actions</div>
      </div>
      {packs.length > 0 ? (
        packs.map(pack => <Pack key={pack._id} pack={pack} />)
      ) : (
        <div style={{ padding: '16px 24px' }}>No results found</div>
      )}
    </div>
  );
};
