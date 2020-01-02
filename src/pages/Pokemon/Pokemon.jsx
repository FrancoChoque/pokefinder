import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemonInfo } from '../../store/index';
import PokeSpinner from '../../components/UI/Spinner/Spinner';
import PokemonDescription from '../../components/Pokemons/PokemonDescription/PokemonDescription';

class Pokemon extends Component {
  componentDidMount() {
    const { getPokemonInfoAction, match } = this.props;
    getPokemonInfoAction(match.params.pokemon);
  }

  render() {
    const { pokemon, isLoading } = this.props;
    if (isLoading || !pokemon.id) {
      return <PokeSpinner />;
    }
    return <PokemonDescription pokemon={pokemon} />;
  }
}

Pokemon.propTypes = {
  getPokemonInfoAction: PropTypes.func,
  isLoading: PropTypes.bool,
  match: PropTypes.object,
  pokemon: PropTypes.object,
};

Pokemon.defaultProps = {
  getPokemonInfoAction: () => {},
  isLoading: false,
  match: {},
  pokemon: {},
};

const mapStateToProps = ({ pokemonReducer, uiReducer }) => ({
  pokemon: pokemonReducer.pokemon,
  isLoading: uiReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getPokemonInfoAction: name => dispatch(getPokemonInfo(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
