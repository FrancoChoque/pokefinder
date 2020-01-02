import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const CustomButton = ({ children, disabled, onClick }) => (
  <button className={styles.Button} type="button" disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

CustomButton.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  disabled: false,
  children: null,
  onClick: () => {},
};

export default CustomButton;
