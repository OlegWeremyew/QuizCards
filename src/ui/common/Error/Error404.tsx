import React from 'react';

import { NavLink } from 'react-router-dom';

import { PATH } from '../../../constants/routes';
import { ReturnComponentType } from '../../../types';
import { SuperButton } from '../SuperButton';

import s from './error404.module.css';

export const Error404 = (): ReturnComponentType => (
  <div className={s.container}>
    <p>Opps! Page Not Found.</p>
    <NavLink to={PATH.PROFILE}>
      <SuperButton>Back to home</SuperButton>
    </NavLink>
  </div>
);
