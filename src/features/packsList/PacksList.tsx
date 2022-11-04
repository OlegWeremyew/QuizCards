import React, { FC, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import styles from './PacksList.module.scss';
import { PacksTable } from './PacksTable/Table';

import { PATH } from 'constants/routes';
import { EMPTY_STRING } from 'constants/variables';
import { AppAction } from 'Redux/appReducer';
import { addPackTC, cardsPackAction, fetchPacksListsTC } from 'Redux/cardsPackReducer';
import {
  getCardPacksTotalCountCardsPackSelector,
  getDebouncingFlagCardsPackSelector,
  getErrorAppSelector,
  getIsLoadingAppSelector,
  getMyPacksCardsPackSelector,
  getPackNameCardsPackSelector,
  getPageCardsPackSelector,
  getPageCountCardsPackSelector,
  getSortPacksCardsPackSelector,
  getStatusLoginSelector,
} from 'selectors';
import {
  Modal,
  ModalButtonsWrap,
  PackFrame,
  PacksSearch,
  PageSizeSelector,
  Pagination,
  Sidebar,
  SuperButton,
  SuperCheckbox,
  SuperInputText,
} from 'ui';
import Header from 'ui/header/Header';
import { Helmet } from 'react-helmet';

export const PacksList: FC = () => {
  const dispatch = useDispatch();

  const error = useSelector(getErrorAppSelector);
  const isLoggedIn = useSelector(getStatusLoginSelector);
  const isLoading = useSelector(getIsLoadingAppSelector);
  const debouncingFlag = useSelector(getDebouncingFlagCardsPackSelector);
  const page = useSelector(getPageCardsPackSelector);
  const pageCount = useSelector(getPageCountCardsPackSelector);
  const myPacks = useSelector(getMyPacksCardsPackSelector);
  const sortPacks = useSelector(getSortPacksCardsPackSelector);
  const cardPacksTotalCount = useSelector(getCardPacksTotalCountCardsPackSelector);
  const packName = useSelector(getPackNameCardsPackSelector);

  const [newPackName, setNewPackName] = useState<string>(EMPTY_STRING);
  const [privateValue, setPrivateValue] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);

  const showModal = (): void => setIsModal(true);
  const closeModal = (): void => setIsModal(false);

  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchPacksListsTC());
    }
  }, [page, pageCount, myPacks, sortPacks, packName, debouncingFlag]);

  useEffect(() => () => {
    if (error.length > 0) dispatch(AppAction.setErrorAC(EMPTY_STRING));
  });

  const pageSizeHandler = (value: number): void => {
    if (!isLoading) dispatch(cardsPackAction.setPageCountAC(value));
  };
  const onChangedPage = (newPage: number): void => {
    if (isLoading) return;
    if (newPage !== page) dispatch(cardsPackAction.changeCurrentPageAC(newPage));
  };

  const addPack = (): void => {
    dispatch(addPackTC(newPackName, privateValue));
    setNewPackName(EMPTY_STRING);
    setPrivateValue(false);
    closeModal();
  };

  if (!isLoggedIn) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <>
      <Helmet>
        <title>pack</title>
        <meta name="description" content="pack list" />
      </Helmet>
      <Header />
      <PackFrame>
        <Sidebar />
        <div className={styles.main}>
          <h2>Packs list</h2>
          <div className={styles.topPanel}>
            <div className={styles.search}>
              <PacksSearch />
            </div>
            <SuperButton onClick={showModal} className={styles.addBtn}>
              Add new pack
            </SuperButton>
          </div>
          {error ? <div style={{ color: 'red' }}>{error}</div> : EMPTY_STRING}
          <PacksTable />
          <div className={styles.paginationWrapper}>
            {cardPacksTotalCount < pageCount ? (
              <></>
            ) : (
              <>
                <Pagination
                  totalCount={cardPacksTotalCount}
                  pageSize={pageCount}
                  currentPage={page}
                  onChangedPage={onChangedPage}
                />
                <PageSizeSelector
                  totalCount={cardPacksTotalCount}
                  pageCount={pageCount}
                  handler={pageSizeHandler}
                />
              </>
            )}
          </div>
        </div>
      </PackFrame>
      <Modal title="Add new pack" show={isModal} closeModal={closeModal}>
        <label className={styles.label} htmlFor="NamePack">
          Name pack
        </label>
        <SuperInputText
          id="NamePack"
          value={newPackName}
          onChangeText={setNewPackName}
          placeholder="Enter pack name"
        />
        <div className={styles.containerCheckBox}>
          <SuperCheckbox
            id="PrivatePack"
            checked={privateValue}
            onChangeChecked={setPrivateValue}
          />
          <label className={styles.label} htmlFor="PrivatePack">
            Private Pack
          </label>
        </div>
        <ModalButtonsWrap closeModal={closeModal}>
          <SuperButton onClick={addPack}>Save</SuperButton>
        </ModalButtonsWrap>
      </Modal>
    </>
  );
};
