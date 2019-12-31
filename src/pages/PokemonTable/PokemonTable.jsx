import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemonList } from '../../store/index';
import PokemonList from '../../components/Views/PokemonList';

class PokemonTable extends Component {
  componentDidMount() {
    const { getPokemonListAction } = this.props;
    getPokemonListAction();
  }

  render() {
    return <PokemonList />;
  }
}

PokemonTable.propTypes = {
  getPokemonListAction: PropTypes.func,
};

PokemonTable.defaultProps = {
  getPokemonListAction: () => {},
};

const mapDispatchToProps = dispatch => ({
  getPokemonListAction: () => dispatch(getPokemonList()),
});

export default connect(null, mapDispatchToProps)(PokemonTable);
