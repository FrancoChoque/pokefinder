import { toastr } from 'react-redux-toastr';
import { uiStartLoading, uiStopLoading } from '../ui/actions';
import { getPokemons, getPokemonByName, getPokemonSpeciesByName } from '../../services/index';
import { SET_POKEMONS_LIST, SET_POKEMON } from '../actionTypes';
import { getParameterByName } from '../../utils/getQueryParams';

const DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon?limit=5';

const setPokemonList = (pokemonList, pokemonPagination) => ({
  type: SET_POKEMONS_LIST,
  pokemonList,
  pokemonPagination,
});

const setPokemon = pokemon => ({
  type: SET_POKEMON,
  pokemon,
});

export const getPokemonList = (url = DEFAULT_URL) => async dispatch => {
  dispatch(uiStartLoading());
  try {
    const res = await getPokemons(url);
    const pokemons = [];
    res.results.forEach(each => {
      pokemons.push(getPokemonByName(each.name));
    });
    const pokemonList = await Promise.all(pokemons);
    res.page = Number(getParameterByName('offset', url)) / Number(getParameterByName('limit', url));
    res.maxPage = Math.round(res.count / Number(getParameterByName('limit', url)));
    dispatch(setPokemonList(pokemonList, res));
    dispatch(uiStopLoading());
  } catch (error) {
    dispatch(uiStopLoading());
    toastr.error('Error', error.message);
  }
};

export const getPokemonInfo = name => async dispatch => {
  dispatch(uiStartLoading());
  dispatch(setPokemon(null));
  try {
    const [pokemonSpeciesData, pokemonData] = await Promise.all([
      getPokemonSpeciesByName(name),
      getPokemonByName(name),
    ]);
    dispatch(setPokemon({ ...pokemonSpeciesData, ...pokemonData }));
    dispatch(uiStopLoading());
  } catch (error) {
    dispatch(uiStopLoading());
  }
};
