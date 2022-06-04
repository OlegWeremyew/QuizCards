import React from 'react';

import { useSelector } from 'react-redux';

import email2 from '../../../../assets/images/email2.png';
import { getEmailPasswordSelector } from '../../../../selectors';
import { ReturnComponentType } from '../../../../types';
import { Frame } from '../../../../ui';

import styles from './CheckEmail.module.scss';

export const CheckEmail = (): ReturnComponentType => {
  const emailName = useSelector(getEmailPasswordSelector);

  return (
    <Frame>
      <img src={email2} alt="email" />
      <h2>Check Email</h2>
      <p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        We've sent an Email with instructions to{' '}
        <span className={styles.text}>{emailName}</span>
      </p>
    </Frame>
  );
};
