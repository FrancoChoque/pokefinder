import React from 'react';
import PropTypes from 'prop-types';
import styles from './Spinner.module.css';

const PokeSpinner = ({ hits }) => {
  return (
    <div className={styles.Spinner}>
      <div className={styles.CenterOnPage}>
        <div className={styles.Pokeball}>
          <div className={styles.PokeballButton} />
        </div>
        <p>Buscando Pokemons</p>
        <p>{hits} pokemons encontrados</p>
      </div>
    </div>
  );
};

PokeSpinner.propTypes = {
  hits: PropTypes.number,
};

PokeSpinner.defaultProps = {
  hits: '',
};

export default PokeSpinner;
