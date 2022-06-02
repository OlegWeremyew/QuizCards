import React, {useState} from 'react';
import SuperButton from "../main/ui/common/SuperButton/SuperButton";
import SuperCheckbox from "../main/ui/common/SuperCheckbox/SuperCheckbox";
import SuperInputText from "../main/ui/common/SuperInputText/SuperInputText";
import s from './test.module.css';
import SuperEditableSpan from "../main/ui/common/SuperEditableSpan/SuperEditableSpan";
import {RangeDemo} from "../main/ui/common/SuperRange/RangeDemo";
import {Pagination} from "../main/ui/common/Pagination/Pagination";
import {EMPTY_STRING} from "../constants";
import {ReturnComponentType} from "../types";

export const Test = (): ReturnComponentType => {
    const [value, setValue] = useState<string>(EMPTY_STRING)
    const [page, setPage] = useState(1)
    const [isShownModal, setIsShownModal] = useState<boolean>(true)

    const onChangedPage = (page: number): void => {
        setPage(page)
    }
    const closeModal = (): void => setIsShownModal(false)
    const showModal = (): void => setIsShownModal(true)
    return (
        <div className={s.container}>
            <div>
                <Pagination totalCount={2211} pageSize={10} currentPage={page} onChangedPage={onChangedPage}/>
            </div>
            <SuperButton onClick={showModal}>BUTTON</SuperButton>
            <SuperCheckbox/>
            <SuperInputText/>
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <RangeDemo/>
        </div>
    );
};
