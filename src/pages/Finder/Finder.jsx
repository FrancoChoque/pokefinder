import React, { Component } from 'react';
import { getPokemons, getPokemonByName } from '../../services/index';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pokemons from '../../components/Pokemons/Pokemons';
import PokeSpinner from '../../components/UI/Spinner/Spinner';
import styles from './Finder.module.css';

class Finder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      results: null,
      hits: 0,
      clickedSearch: false,
      searchField: '',
    };
    this.searchedText = '';
  }

  searchPokemonHandler = async searchedText => {
    this.setState({ results: [], clickedSearch: true, hits: 0 });
    const matches = this.state.pokemons.filter(each =>
      each.name.includes(searchedText.toLocaleLowerCase()),
    );
    const results = [];
    console.log(matches);

    /* for (let each of matches) {
      const res = getPokemonByName(each.name);
      results.push(res);
      this.setState(prevState => {
        return {
          ...prevState,
          hits: prevState.hits + 1,
        };
      });
    }
    try {
      const finalResult = await Promise.all(results);
      this.setState({ results: [...finalResult], clickedSearch: false });
    } catch (error) {
      alert('an error ocurred');
      this.setState({ clickedSearch: false });
    } */
  };

  render() {
    let searchResults = this.state.clickedSearch ? (
      <PokeSpinner hits={this.state.hits} />
    ) : (
      <p className={styles.Info}>El que quiere Pokemons, que los busque</p>
    );

    if (this.state.results && !this.state.clickedSearch) {
      searchResults = this.state.results.length ? (
        <>
          <p className={styles.Info}>
            Resultados de la búsqueda "{this.searchedText}" - {this.state.hits} coincidencias
          </p>
          <Pokemons data={this.state.results} />
        </>
      ) : (
        <p className={styles.Info}>
          No se encontró ningún Pokemon cuyo nombre contenga: "{this.searchedText}"
        </p>
      );
    }

    return (
      <>
        <SearchBar
          searchPokemon={this.searchPokemonHandler}
          placeholder="Nombre del pokemon..."
          disabled={this.state.clickedSearch}
        />
        <div className={styles.Container}>{searchResults}</div>
      </>
    );
  }
}

export default Finder;
