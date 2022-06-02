import React, {useEffect, useState} from 'react';
import styles from './PacksList.module.css'
import Header from "../../ui/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {addPackTC, changeCurrentPageAC, fetchPacksListsTC, setPageCountAC} from "../../Redux/cardsPackReducer";
import {Navigate} from "react-router-dom";
import {EMPTY_STRING} from "../../constants";
import {ReturnComponentType} from "../../types";
import {PATH} from "../../constants/routes";
import {PacksTable} from "./PacksTable/Table";
import {
    Modal, ModalButtonsWrap,
    PackFrame,
    PacksSearch,
    PageSizeSelector,
    Pagination,
    Sidebar,
    SuperButton, SuperCheckbox,
    SuperInputText
} from "../../ui";
import {setErrorAC} from "../../Redux/appReducer";

export const PacksList = (): ReturnComponentType => {
    const dispatch = useDispatch();

    const error = useSelector<AppRootStateType, string>(state => state.app.error);
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.status);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading)
    const debouncingFlag = useSelector<AppRootStateType, object>(state => state.cardsPack.debouncingFlag)
    const page = useSelector<AppRootStateType, number>(state => state.cardsPack.page)
    const pageCount = useSelector<AppRootStateType, number>(state => state.cardsPack.pageCount)
    const myPacks = useSelector<AppRootStateType, boolean>(state => state.cardsPack.myPacks)
    const sortPacks = useSelector<AppRootStateType, string>(state => state.cardsPack.sortPacks)
    const cardPacksTotalCount = useSelector<AppRootStateType, number>(state => state.cardsPack.cardPacksTotalCount)
    const packName = useSelector<AppRootStateType, string>(state => state.cardsPack.packName)

    const [newPackName, setNewPackName] = useState<string>(EMPTY_STRING);
    const [privateValue, setPrivateValue] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false);

    const showModal = (): void => setIsModal(true);
    const closeModal = (): void => setIsModal(false);

    useEffect(() => {
        if (!isLoading) {
            dispatch(fetchPacksListsTC())
        }
    }, [page, pageCount, myPacks, sortPacks, packName, debouncingFlag])

    useEffect(() => {
        return () => {
            if (error.length > 0) dispatch(setErrorAC(EMPTY_STRING))
        }
    })


    const pageSizeHandler = (value: number): void => {
        if (!isLoading) dispatch(setPageCountAC(value))
    }
    const onChangedPage = (newPage: number): void => {
        if (isLoading) return
        if (newPage !== page) dispatch(changeCurrentPageAC(newPage))
    }

    const addPack = (): void => {
        dispatch(addPackTC(newPackName, privateValue))
        setNewPackName(EMPTY_STRING)
        setPrivateValue(false)
        closeModal()
    }

    if (!isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <>
            <Header/>
            <PackFrame>
                <Sidebar/>
                <div className={styles.main}>
                    <h2>Packs list</h2>
                    <div className={styles.topPanel}>
                        <div className={styles.search}>
                            <PacksSearch/>
                        </div>
                        <SuperButton onClick={showModal} className={styles.addBtn}>Add new pack</SuperButton>
                    </div>
                    {error ? <div style={{color: 'red'}}>{error}</div> : EMPTY_STRING}
                    <PacksTable/>
                    <div className={styles.paginationWrapper}>
                        {
                            cardPacksTotalCount < pageCount
                                ? <></>
                                : <>
                                    <Pagination totalCount={cardPacksTotalCount}
                                                pageSize={pageCount}
                                                currentPage={page}
                                                onChangedPage={onChangedPage}/>
                                    <PageSizeSelector
                                        totalCount={cardPacksTotalCount}
                                        pageCount={pageCount}
                                        handler={pageSizeHandler}/>
                                </>
                        }
                    </div>
                </div>
            </PackFrame>
            <Modal title={'Add new pack'} show={isModal} closeModal={closeModal}>
                <label>Name pack</label>
                <SuperInputText value={newPackName} onChangeText={setNewPackName} placeholder={'Enter pack name'}/>
                <div className={styles.containerCheckBox}>
                    <SuperCheckbox checked={privateValue} onChangeChecked={setPrivateValue}/>
                    <span>Private Pack</span>
                </div>
                <ModalButtonsWrap closeModal={closeModal}>
                    <SuperButton onClick={addPack}>Save</SuperButton>
                </ModalButtonsWrap>
            </Modal>
        </>
    );
};