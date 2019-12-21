import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = ({ closed, opened, toggle }) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (opened) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }

  return (
    <>
      <Backdrop show={opened} clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        <div style={{ height: '8%' }}>
          <Logo style={{ height: '100%' }} clicked={toggle} />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

SideDrawer.propTypes = {
  closed: PropTypes.func,
  opened: PropTypes.bool,
  toggle: PropTypes.func,
};

SideDrawer.defaultProps = {
  closed: () => {},
  opened: false,
  toggle: () => {},
};

export default SideDrawer;
