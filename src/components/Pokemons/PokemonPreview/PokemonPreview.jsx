import React from 'react';
import PropTypes from 'prop-types';
import image from '../../../assets/images/unknown.png';
import Stat from './Stat/Stat';
import styles from './PokemonPreview.module.css';

const PokemonPreview = ({ pokemon }) => {
  return (
    <div className={styles.PokemonPreview}>
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
                name={'HP'}
                value={pokemon.stats.find(each => each.stat.name === 'hp').base_stat}
              />
              <Stat
                name={'Ataque'}
                value={pokemon.stats.find(each => each.stat.name === 'attack').base_stat}
              />
              <Stat
                name={'Defensa'}
                value={pokemon.stats.find(each => each.stat.name === 'defense').base_stat}
              />
            </div>
            <div className={styles.StatsContainerRow}>
              <Stat
                name={'ATQ.ESP'}
                value={pokemon.stats.find(each => each.stat.name === 'special-attack').base_stat}
              />
              <Stat
                name={'DEF.ESP'}
                value={pokemon.stats.find(each => each.stat.name === 'special-defense').base_stat}
              />
              <Stat
                name={'Velocidad'}
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
