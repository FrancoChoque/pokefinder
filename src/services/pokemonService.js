import axios from 'axios';

export const getPokemons = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=2000')
      .then(res => {
        if (res && res.data) {
          console.log('get-pokemons', res);
          resolve(res.data.results);
        } else {
          reject(res);
        }
      })
      .catch(err => {
        console.log('get-pokemons', err);
        reject(err);
      });
  });
};

export const getPokemonByName = name => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + name + '/')
      .then(res => {
        if (res && res.data) {
          console.log('get-pokemon-by-name', res);
          resolve(res.data);
        } else {
          reject(res);
        }
      })
      .catch(err => {
        console.log('get-pokemon-by-name', err);
        reject(err);
      });
  });
};
