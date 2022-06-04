import React from 'react';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import packsListIcon from '../../assets/images/Packs.svg';
import profileIcon from '../../assets/images/Profile.svg';
import { PATH } from '../../constants/routes';
import { logoutTC } from '../../Redux/loginReducer';
import { ReturnComponentType } from '../../types';

import styles from './Header.module.scss';

export const Header = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const logOutHandler = (): void => {
    dispatch(logoutTC());
  };

  return (
    <header className={styles.header}>
      <nav>
        <NavLink
          to={PATH.PACKS}
          className={navData => (navData.isActive ? styles.isActive : '')}
        >
          <div className={styles.packsLink}>
            <img src={packsListIcon} alt="packsListIcon" />
            <span> Packs list</span>
          </div>
        </NavLink>
        <NavLink
          to={PATH.PROFILE}
          className={navData => (navData.isActive ? styles.isActive : '')}
        >
          <div className={styles.profileLink}>
            <img src={profileIcon} alt="profileIcon" />
            <span> Profile</span>
          </div>
        </NavLink>
        <div className={styles.btnLogoutContainer}>
          <button type="button" className={styles.btnLogout} onClick={logOutHandler}>
            Log Out
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
