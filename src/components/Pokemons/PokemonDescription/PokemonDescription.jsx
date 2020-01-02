import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import image from '../../../assets/images/unknown.png';
import styles from './PokemonDescription.module.css';

const PokemonDescription = ({ pokemon }) => {
  const { i18n } = useTranslation();
  const text = pokemon.flavor_text_entries.find(each => each.language.name === i18n.language);

  return (
    <div className={styles.PokemonDescription}>
      <h1>
        {pokemon.name} #{pokemon.id}
      </h1>
      <div className={styles.Info}>
        <img src={pokemon.sprites.front_default || image} alt={pokemon.name} />
        <p>{text.flavor_text}</p>
      </div>
    </div>
  );
};

PokemonDescription.propTypes = {
  pokemon: PropTypes.object,
};

PokemonDescription.defaultProps = {
  pokemon: {},
};

export default PokemonDescription;
