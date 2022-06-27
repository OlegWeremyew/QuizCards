import React, { FC, useState } from 'react';

import {
  Pagination,
  RangeDemo,
  SuperButton,
  SuperCheckbox,
  SuperEditableSpan,
  SuperInputText,
} from '../../ui';

import s from './Test.module.scss';

import { EMPTY_STRING } from 'constants/variables';

export const Test: FC = () => {
  const [value, setValue] = useState<string>(EMPTY_STRING);
  const [page, setPage] = useState(1);
  const [isShownModal, setIsShownModal] = useState<boolean>(true);

  const onChangedPage = (page: number): void => {
    setPage(page);
  };
  const closeModal = (): void => setIsShownModal(false);
  const showModal = (): void => setIsShownModal(true);
  return (
    <div className={s.container}>
      <div>
        <Pagination
          totalCount={2211}
          pageSize={10}
          currentPage={page}
          onChangedPage={onChangedPage}
        />
      </div>
      <SuperButton onClick={showModal}>BUTTON</SuperButton>
      <SuperCheckbox />
      <SuperInputText />
      <div>
        <SuperEditableSpan
          value={value}
          onChangeText={setValue}
          spanProps={{ children: value ? undefined : 'enter text...' }}
        />
      </div>
      <RangeDemo />
    </div>
  );
};
