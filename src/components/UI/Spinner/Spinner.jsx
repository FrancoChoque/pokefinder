import React from 'react';
import styles from './Spinner.module.css';

const PokeSpinner = () => {
  return (
    <div className={styles.Spinner}>
      <div className={styles.CenterOnPage}>
        <div className={styles.Pokeball}>
          <div className={styles.PokeballButton} />
        </div>
      </div>
    </div>
  );
};

export default PokeSpinner;
