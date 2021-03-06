import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import s from './Error404.module.scss';

import { PATH } from 'constants/routes';
import { SuperButton } from 'ui/common';

export const Error404: FC = () => (
  <div className={s.container}>
    <p>Opps! Page Not Found.</p>
    <NavLink to={PATH.PROFILE}>
      <SuperButton>Back to home</SuperButton>
    </NavLink>
  </div>
);
