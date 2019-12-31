import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from '../Table/Table';
import { getPokemonList } from '../../store/pokemon/actions';

const PokemonList = ({ pokemonList, pokemonPagination, getPokemonListAction }) => {
  const data = React.useMemo(() => pokemonList, [pokemonList]);
  const nextPageHandler = () => {
    getPokemonListAction(pokemonPagination.next);
  };
  const previousPageHandler = () => {
    getPokemonListAction(pokemonPagination.previous);
  };

  return (
    <Table
      data={data}
      canNextPage={!!pokemonPagination.next}
      canPreviousPage={!!pokemonPagination.previous}
      nextPage={nextPageHandler}
      previousPage={previousPageHandler}
      pageIndex={pokemonPagination.page}
      maxPage={pokemonPagination.maxPage}
    />
  );
};

PokemonList.propTypes = {
  getPokemonListAction: PropTypes.func,
  pokemonList: PropTypes.array,
  pokemonPagination: PropTypes.object,
};

PokemonList.defaultProps = {
  getPokemonListAction: () => {},
  pokemonList: [],
  pokemonPagination: {},
};

const mapStateToProps = ({ pokemonReducer }) => ({
  pokemonList: pokemonReducer.pokemonList,
  pokemonPagination: pokemonReducer.pokemonPagination,
});

const mapDispatchToProps = dispatch => ({
  getPokemonListAction: next => dispatch(getPokemonList(next)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
