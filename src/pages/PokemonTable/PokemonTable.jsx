import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemonList } from '../../store/index';
import PokemonList from '../../components/Views/PokemonList';

class PokemonTable extends Component {
  componentDidMount() {
    const { getPokemonListAction, pokemonList } = this.props;
    if (!pokemonList.length) {
      getPokemonListAction();
    }
  }

  render() {
    return <PokemonList />;
  }
}

PokemonTable.propTypes = {
  getPokemonListAction: PropTypes.func,
  pokemonList: PropTypes.array,
};

PokemonTable.defaultProps = {
  getPokemonListAction: () => {},
  pokemonList: PropTypes.length,
};

const mapStateToProps = ({ pokemonReducer }) => ({
  pokemonList: pokemonReducer.pokemonList,
});

const mapDispatchToProps = dispatch => ({
  getPokemonListAction: () => dispatch(getPokemonList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonTable);
