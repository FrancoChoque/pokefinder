import React from 'react';
import PokemonPreview from './PokemonPreview/PokemonPreview';
import styles from './Pokemons.module.css';

const Pokemons = props => {
  const matches = props.data.map(each => <PokemonPreview pokemon={each} key={each.name} />);
  return <div className={styles.Pokemons}>{matches}</div>;
};

export default Pokemons;
