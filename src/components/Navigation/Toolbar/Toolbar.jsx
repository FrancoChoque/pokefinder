import React from 'react';
import PropTypes from 'prop-types';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = ({ drawerToggleClicked }) => {
  return (
    <header className={styles.Toolbar}>
      <DrawerToggle clicked={drawerToggleClicked} />
      <div style={{ height: '100%' }}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

Toolbar.propTypes = {
  drawerToggleClicked: PropTypes.func,
};

Toolbar.defaultProps = {
  drawerToggleClicked: () => {},
};

export default Toolbar;
