import { SET_POKEMONS_LIST } from '../actionTypes';

const initialState = {
  pokemonList: [],
  pokemonPagination: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS_LIST:
      return {
        ...state,
        pokemonList: action.pokemonList,
        pokemonPagination: { ...action.pokemonPagination },
      };
    default:
      return state;
  }
};

export default reducer;
