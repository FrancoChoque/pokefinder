import React, { Component } from "react";
import SearchResult from "../../components/SearchResult/SearchResult";
import { getPokemons, getPokemonByName } from "../../services/index";
import SearchBar from "../../components/SearchBar/SearchBar";

class Finder extends Component {
  state = {
    pokemons: [],
    results: [],
    searchField: ""
  };

  componentDidMount = async () => {
    try {
      const res = await getPokemons();
      this.setState({ pokemons: res, results: res });
    } catch (error) {
      alert("an error ocurred");
    }
  };

  searchPokemonHandler = async () => {
    try {
      const matches = this.state.pokemons.filter(each =>
        each.name.includes(this.state.searchField)
      );
      this.setState({results: matches});
    
    } catch (error) {
      console.log(error);
      alert("an error ocurred");
    }
  };

  searchTextHandler = text => {
    console.log("text");
    this.setState({ searchField: text });
  };

  keyPressHandler = (e) => {
    if (e.key === "Enter") {
      this.searchPokemonHandler();
    }
  }

  render() {
    let searchResults = null;

    if (this.state.results) {
      searchResults = this.state.results.map((each, index) => (
        <SearchResult key={index} name={each.name} />
      ));
    }

    return (
      <>
        <SearchBar
          value={this.state.searchField}
          textChanged={text => this.searchTextHandler(text)}
          clicked={this.searchPokemonHandler}
          onKeyPress={e => this.keyPressHandler(e)}
          placeholder={"Nombre del pokemon..."}
        />
        {searchResults}
      </>
    );
  }
}

export default Finder;
