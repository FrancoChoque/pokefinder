import React from "react";
import styles from "./Spinner.module.css";

const pokeSpinner = (props) => {
  return (
    <div className={styles.Spinner}>
      <div className={styles.CenterOnPage}>
        <div className={styles.Pokeball}>
          <div className={styles.PokeballButton} />
        </div>
        <p>Buscando Pokemons</p>
        <p>{props.hits} pokemons encontrados</p>
      </div>
    </div>
  );
};

export default pokeSpinner;
