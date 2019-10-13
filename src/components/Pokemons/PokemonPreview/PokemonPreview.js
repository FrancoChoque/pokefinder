import React from "react";
import image from "../../../assets/images/unknown.png";
import Stat from './Stat/Stat';
import styles from "./PokemonPreview.module.css";

const pokemonPreview = props => {
  return (
    <div className={styles.PokemonPreview}>
      <div className={styles.CardContainer}>
        <img
          src={
            props.pokemon.sprites.front_default
              ? props.pokemon.sprites.front_default
              : image
          }
          alt={props.pokemon.name}
        />
        <div style={{ display: "flex", flexDirection: "column", width: "100%"}}>
          <p className={styles.header}>{props.pokemon.name}</p>
          <div className={styles.StatsContainer}>
            <div className={styles.StatsContainerRow}>
              <Stat
                name={"HP"}
                value={props.pokemon.stats.find(each => each.stat.name === "hp").base_stat}
              />
              <Stat
                name={"Ataque"}
                value={props.pokemon.stats.find(each => each.stat.name === "attack").base_stat}
              />
              <Stat
                name={"Defensa"}
                value={props.pokemon.stats.find(each => each.stat.name === "defense").base_stat}
              />
            </div>
            <div className={styles.StatsContainerRow}>
              <Stat
                name={"ATQ.ESP"}
                value={props.pokemon.stats.find(each => each.stat.name === "special-attack").base_stat}
              />
              <Stat
                name={"DEF.ESP"}
                value={props.pokemon.stats.find(each => each.stat.name === "special-defense").base_stat}
              />
              <Stat
                name={"Velocidad"}
                value={props.pokemon.stats.find(each => each.stat.name === "speed").base_stat}
              />            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pokemonPreview;
