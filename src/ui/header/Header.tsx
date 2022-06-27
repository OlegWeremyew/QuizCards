import React, { FC } from 'react';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

import logout from 'assets/images/header/logout.png';
import packsListIcon from 'assets/images/header/Packs.png';
import profileIcon from 'assets/images/header/Profile.png';
import { PATH } from 'constants/routes';
import { EMPTY_STRING } from 'constants/variables';
import { logoutTC } from 'Redux/loginReducer';

export const Header: FC = () => {
  const dispatch = useDispatch();
  const logOutHandler = (): void => {
    dispatch(logoutTC());
  };

  return (
    <header className={styles.header}>
      <nav>
        <NavLink
          to={PATH.PACKS}
          className={navData => (navData.isActive ? styles.isActive : EMPTY_STRING)}
        >
          <div className={styles.packsLink}>
            <img src={packsListIcon} alt="packsListIcon" />
            <span> Packs list</span>
          </div>
        </NavLink>
        <NavLink
          to={PATH.PROFILE}
          className={navData => (navData.isActive ? styles.isActive : EMPTY_STRING)}
        >
          <div className={styles.profileLink}>
            <img src={profileIcon} alt="profileIcon" />
            <span> Profile</span>
          </div>
        </NavLink>
        <div className={styles.btnLogoutContainer}>
          <button type="button" className={styles.btnLogout} onClick={logOutHandler}>
            Log Out <img src={logout} alt="packsListIcon" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
