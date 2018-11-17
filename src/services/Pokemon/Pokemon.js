import axios from "axios";

export const getPokemons = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then(res => {
        if(res && res.data && res.data.results) {
            console.log("get-pokemons-service", res);
            resolve(res.data.results);
        } else {
            reject(res);
        }
      })
      .catch(err => {
        console.log("get-pokemons-service", err);
        reject(err);
      });
  });
};
