import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import email2 from '../../../../assets/images/email2.png';
import { getEmailPasswordSelector } from '../../../../selectors';
import { Frame } from '../../../../ui';

import styles from './CheckEmail.module.scss';

export const CheckEmail: FC = () => {
  const emailName = useSelector(getEmailPasswordSelector);

  return (
    <Frame>
      <img src={email2} alt="email" />
      <h2>Check Email</h2>
      <p>
        We've sent an Email with instructions to{' '}
        <span className={styles.text}>{emailName}</span>
      </p>
    </Frame>
  );
};
