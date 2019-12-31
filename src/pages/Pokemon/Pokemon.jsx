import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemonSpeciesByName } from '../../services/index';

class Pokemon extends Component {
  componentDidMount() {
    /*     const { getPokemonSpeciesByNameAction } = this.props;
    getPokemonSpeciesByNameAction(); */
    console.log(this.props);
  }

  render() {
    return <div>{this.props.match.params.pokemon}</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  getPokemonByNameAction: name => dispatch(getPokemonSpeciesByName(name)),
});

export default connect(null, mapDispatchToProps)(Pokemon);
