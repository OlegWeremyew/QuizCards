import React, {useEffect, useState} from 'react';
import styles from './Cards.module.css'
import Header from "../../ui/header/Header";
import {Navigate, NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {CardType} from "../../api/cardsApi";
import backPage from "../../assets/images/backPage.svg"
import {PATH} from "../../constants/routes";
import {EMPTY_STRING} from "../../constants";
import {CardsTable} from "./CardsTable/Table";
import {ReturnComponentType} from "../../types";
import {
    CardsSearch,
    Modal,
    ModalButtonsWrap,
    PackFrame,
    PageSizeSelector,
    Pagination,
    SuperButton,
    SuperTextArea
} from "../../ui";
import {addCardTC, cardsAction, fetchCardsTC} from "../../Redux/cardsReducer";

export const Cards = (): ReturnComponentType => {

    const myId = useSelector<AppRootStateType, string>(state => state.profilePage._id);
    const userId = useSelector<AppRootStateType, string>(state => state.cards.packUserId);
    const dispatch = useDispatch();
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading)
    const packName = useSelector<AppRootStateType, string>(state => state.cardsPack.packName);
    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards);
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.status);
    const page = useSelector<AppRootStateType, number>(state => state.cards.page)
    const pageCount = useSelector<AppRootStateType, number>(state => state.cards.pageCount)
    const cardQuestion = useSelector<AppRootStateType, string>(state => state.cards.cardQuestion)
    const cardAnswer = useSelector<AppRootStateType, string>(state => state.cards.cardAnswer)
    const sortCards = useSelector<AppRootStateType, string>(state => state.cards.sortCards)
    const cardsTotalCount = useSelector<AppRootStateType, number>(state => state.cards.cardsTotalCount)
    const {packId} = useParams<{ packId: string }>();

    const currId = packId ? packId : EMPTY_STRING

    const [newCardQuestion, setNewCardQuestion] = useState<string>(EMPTY_STRING);
    const [newCardAnswer, setNewCardAnswer] = useState<string>(EMPTY_STRING);
    const [isModalAdd, setIsModalAdd] = useState<boolean>(false)

    const showModal = (): void => setIsModalAdd(true);
    const closeModal = (): void => setIsModalAdd(false);

    useEffect(() => {
        if (packId) {
            if (!isLoading) dispatch(fetchCardsTC(packId))
        }
    }, [page, pageCount, cardQuestion, cardAnswer, sortCards])


    if (!isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }

    const onChangedPage = (newPage: number): void => {
        if (newPage !== page) dispatch(cardsAction.changeCurrentPageCardsAC(newPage))
    }

    const pageSizeHandler = (value: number): void => {
        dispatch(cardsAction.setPageCountCardsAC(value))
    }

    const addCard = (): void => {
        dispatch(addCardTC(currId, newCardQuestion, newCardAnswer))
        setNewCardQuestion(EMPTY_STRING)
        setNewCardAnswer(EMPTY_STRING)
        closeModal()
    }

    return (
        <>
            <Header/>
            <PackFrame>
                <div className={styles.main}>
                    <NavLink to={PATH.PACKS}><img src={backPage} alt={"backPage"}/></NavLink>
                    <h2>{packName}</h2>
                    <div className={styles.containerHeaderCard}>
                        <div className={styles.search}>
                            <CardsSearch/>
                        </div>
                        {
                            myId === userId
                                ? <SuperButton onClick={showModal} className={styles.addBtn}>Add new card</SuperButton>
                                : <></>
                        }
                    </div>
                    <CardsTable cards={cards}/>
                    <div className={styles.paginationWrapper}>
                        {
                            cardsTotalCount < pageCount
                                ? <></>
                                : <>
                                    <Pagination totalCount={cardsTotalCount} pageSize={pageCount} currentPage={page}
                                                onChangedPage={onChangedPage}/>
                                    <PageSizeSelector
                                        totalCount={cardsTotalCount}
                                        pageCount={pageCount} handler={pageSizeHandler}/>
                                </>
                        }
                    </div>
                </div>
            </PackFrame>
            <Modal title={'Card Info'} show={isModalAdd} closeModal={closeModal}>
                <div className={styles.textArea}>
                    <label>Question</label>
                    <SuperTextArea value={newCardQuestion} onChangeText={setNewCardQuestion}/>
                </div>
                <div className={styles.textArea}>
                    <label>Answer</label>
                    <SuperTextArea value={newCardAnswer} onChangeText={setNewCardAnswer}/>
                </div>
                <ModalButtonsWrap closeModal={closeModal}>
                    <SuperButton onClick={addCard}>Save</SuperButton>
                </ModalButtonsWrap>
            </Modal>
        </>
    );
};