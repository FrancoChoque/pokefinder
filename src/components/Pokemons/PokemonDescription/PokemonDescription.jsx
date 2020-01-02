import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import image from '../../../assets/images/unknown.png';
import styles from './PokemonDescription.module.css';

const PokemonDescription = ({ pokemon }) => {
  const { i18n, t } = useTranslation();
  const text = pokemon.flavor_text_entries.find(entry => entry.language.name === i18n.language);
  const abilities = pokemon.abilities.map(eachAbility => {
    const ability = eachAbility.flavor_text_entries.find(
      each => each.language.name === i18n.language,
    );

    const name = eachAbility.names.find(each => each.language.name === i18n.language);
    return (
      <li key={name.name}>
        <strong>{name.name}:</strong> <span>{ability.flavor_text}</span>
      </li>
    );
  });
  return (
    <div className={styles.PokemonDescription}>
      <h1>
        {pokemon.name} #{pokemon.id}
      </h1>
      <div className={styles.Info}>
        <img src={pokemon.sprites.front_default || image} alt={pokemon.name} />
        <p>{text.flavor_text}</p>
      </div>
      <div className={styles.Abilities}>
        <h3>{t('POKEMON.ABILITIES')}</h3>
        <ul>{abilities}</ul>
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
