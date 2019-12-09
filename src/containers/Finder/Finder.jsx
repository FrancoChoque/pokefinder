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

  componentDidMount = async () => {
    try {
      const res = await getPokemons();
      this.setState({ pokemons: res });
    } catch (error) {
      alert('an error ocurred');
    }
  };

  searchPokemonHandler = async () => {
    this.setState({ results: [], clickedSearch: true, hits: 0 });
    this.searchedText = this.state.searchField;
    const matches = this.state.pokemons.filter(each =>
      each.name.includes(this.state.searchField.toLocaleLowerCase()),
    );
    const results = [];
    for (let each of matches) {
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
    }
  };

  searchTextHandler = text => {
    this.setState({ searchField: text });
  };

  keyPressHandler = e => {
    if (e.key === 'Enter') {
      this.searchPokemonHandler();
    }
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
          value={this.state.searchField}
          textChanged={text => this.searchTextHandler(text)}
          clicked={this.searchPokemonHandler}
          onKeyPress={e => this.keyPressHandler(e)}
          placeholder={'Nombre del pokemon...'}
          disabled={this.state.clickedSearch}
        />
        <div className={styles.Container}>{searchResults}</div>
      </>
    );
  }
}

export default Finder;
