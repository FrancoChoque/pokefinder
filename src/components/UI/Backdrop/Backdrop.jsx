import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.module.css';

const Backdrop = ({ clicked, show }) =>
  show ? <div onClick={clicked} role="presentation" className={styles.Backdrop} /> : null;

Backdrop.propTypes = {
  clicked: PropTypes.func,
  show: PropTypes.bool,
};

Backdrop.defaultProps = {
  clicked: () => {},
  show: false,
};

export default Backdrop;
