import React from 'react';
import styles from './Stat.module.css';

const Stat = (props) => (
  <div className={styles.Stat}>
    <p>{props.name}</p>
    <p>{props.value}</p>
  </div>
);

export default Stat;