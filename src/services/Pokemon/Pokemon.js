import axios from 'axios';

export const getPokemons = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=2000')
      .then(res => {
        if (res && res.data) {
          resolve(res.data.results);
        } else {
          reject(res);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getPokemonByName = name => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => {
        if (res && res.data) {
          resolve(res.data);
        } else {
          reject(res);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};
