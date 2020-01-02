import axios from 'axios';

export const getPokemons = url => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
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

export const getPokemonAbilityByName = name => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://pokeapi.co/api/v2/ability/${name}`)
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

export const getPokemonSpeciesByName = name => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
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
