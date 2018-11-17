import React, { Component } from "react";
import SearchResult from "../../components/SearchResult/SearchResult";
import { getPokemons } from "../../services/index";
import SearchBar from "../../components/SearchBar/SearchBar";

class Finder extends Component {
  state = {
    pokemons: []
  };

  componentDidMount = async () => {
    try {
      const res = await getPokemons();
      this.setState({ pokemons: res });
    } catch (error) {
      console.log(error);
      alert("an error ocurred");
    }
  };

  searchPokemonHandler = () => {};

  render() {
    let searchResults = null;

    if (this.state.pokemons) {
      searchResults = this.state.pokemons.map(each => (
        <SearchResult name={each.name} />
      ));
    }

    return (
      <>
        <SearchBar />
        {searchResults}
      </>
    );
  }
}

export default Finder;
