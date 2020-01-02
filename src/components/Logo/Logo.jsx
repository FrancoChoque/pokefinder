import React from 'react';
import { useHistory } from 'react-router-dom';
import pokelogo from '../../assets/images/logo.png';
import styles from './Logo.module.css';

const Logo = () => {
  const history = useHistory();
  return (
    <div className={styles.Logo}>
      <img role="presentation" src={pokelogo} alt="Pokémon" onClick={() => history.push('/')} />
    </div>
  );
};

export default Logo;
