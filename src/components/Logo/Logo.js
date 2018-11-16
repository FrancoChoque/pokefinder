import React from "react";
import pokelogo from "../../assets/images/logo.png";
import styles from "./Logo.module.css";

const logo = () => (
  <div className={styles.Logo}>
    <img src={pokelogo} alt="Pokémon" />
  </div>
);

export default logo;
