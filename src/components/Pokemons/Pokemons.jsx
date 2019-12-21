import React from 'react';
import PropTypes from 'prop-types';
import PokemonPreview from './PokemonPreview/PokemonPreview';
import styles from './Pokemons.module.css';

const Pokemons = ({ data }) => {
  const matches = data.map(each => <PokemonPreview pokemon={each} key={each.name} />);
  return <div className={styles.Pokemons}>{matches}</div>;
};

Pokemons.propTypes = {
  data: PropTypes.array,
};

Pokemons.defaultProps = {
  data: [],
};

export default Pokemons;
