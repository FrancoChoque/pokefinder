import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './NavigationItem.module.css';

const NavigationItem = ({ children, link }) => {
  return (
    <li className={styles.NavigationItem}>
      <NavLink to={link} activeClassName={styles.active} exact>
        {children}
      </NavLink>
    </li>
  );
};

NavigationItem.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
};

NavigationItem.defaultProps = {
  children: null,
  link: '',
};

export default NavigationItem;
