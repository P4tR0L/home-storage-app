import React from 'react';
import styles from './Header.module.scss';
import logoImage from '../../assets/images/logo.svg';
import HeaderNavigation from '../../components/Header/HeaderNavigation';

const Header = () => (
  <header className={styles.wrapper}>
    <img className={styles.logo} src={logoImage} alt="HomeStorage logo" />
    <HeaderNavigation />
  </header>
);

export default Header;