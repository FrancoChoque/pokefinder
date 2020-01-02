import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import image from '../../../assets/images/unknown.png';
import Stat from './Stat/Stat';
import styles from './PokemonPreview.module.css';
import { getColorByType } from '../../../helpers/PokemonHelper';

const PokemonPreview = ({ pokemon }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const pokemonType = pokemon.types.find(each => each.slot === 1);

  return (
    <div
      role="presentation"
      className={styles.PokemonPreview}
      style={{ backgroundColor: getColorByType(pokemonType.type.name) }}
      onClick={() => history.push(`/pokemon/${pokemon.name}`)}
    >
      <div className={styles.CardContainer}>
        <img
          src={pokemon.sprites.front_default ? pokemon.sprites.front_default : image}
          alt={pokemon.name}
        />
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <p className={styles.header}>{pokemon.name}</p>
          <div className={styles.StatsContainer}>
            <div className={styles.StatsContainerRow}>
              <Stat
                name={t('POKEMON_PREVIEW.STATS.HP')}
                value={pokemon.stats.find(each => each.stat.name === 'hp').base_stat}
              />
              <Stat
                name={t('POKEMON_PREVIEW.STATS.ATTACK')}
                value={pokemon.stats.find(each => each.stat.name === 'attack').base_stat}
              />
              <Stat
                name={t('POKEMON_PREVIEW.STATS.DEFENSE')}
                value={pokemon.stats.find(each => each.stat.name === 'defense').base_stat}
              />
            </div>
            <div className={styles.StatsContainerRow}>
              <Stat
                name={t('POKEMON_PREVIEW.STATS.SP_ATTACK')}
                value={pokemon.stats.find(each => each.stat.name === 'special-attack').base_stat}
              />
              <Stat
                name={t('POKEMON_PREVIEW.STATS.SP_DEFENSE')}
                value={pokemon.stats.find(each => each.stat.name === 'special-defense').base_stat}
              />
              <Stat
                name={t('POKEMON_PREVIEW.STATS.SPEED')}
                value={pokemon.stats.find(each => each.stat.name === 'speed').base_stat}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PokemonPreview.propTypes = {
  pokemon: PropTypes.object,
};

PokemonPreview.defaultProps = {
  pokemon: {},
};

export default PokemonPreview;
