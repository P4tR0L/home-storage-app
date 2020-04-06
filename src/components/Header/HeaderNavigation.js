import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';

const HeaderNavigation = () => (
  <nav>
    <ul className={styles.wrapper}>
      <li className={styles.navItem}>
        <NavLink exact
          activeClassName={styles.navItemLinkActive}
          className={styles.navItemLink} to="/">product list</NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink exact
          activeClassName={styles.navItemLinkActive}
          className={styles.navItemLink} to="/shoppinglist">shopping list</NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink
          activeClassName={styles.navItemLinkActive}
          className={styles.navItemLink} to="/settings">settings</NavLink>
      </li>
    </ul>
  </nav>
);

export default HeaderNavigation;  