import { SET_POKEMONS_LIST, SET_POKEMON } from '../actionTypes';

const initialState = {
  pokemonList: [],
  pokemonPagination: {},
  pokemon: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS_LIST:
      return {
        ...state,
        pokemonList: action.pokemonList,
        pokemonPagination: { ...action.pokemonPagination },
      };

    case SET_POKEMON:
      return {
        ...state,
        pokemon: { ...action.pokemon },
      };
    default:
      return state;
  }
};

export default reducer;
