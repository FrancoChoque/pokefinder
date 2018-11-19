import React from "react";
import image from "../../../assets/images/unknown.png";
import styles from "./PokemonPreview.module.css";

const pokemonPreview = props => {
  return (
    <div className={styles.PokemonPreview}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",          
        }}
      >
        <img
          src={
            props.pokemon.sprites.front_default
              ? props.pokemon.sprites.front_default
              : image
          }
          height="150px"
          alt={props.pokemon.name}
        />
        <div style={{ display: "flex", flexDirection: "column", width: "100%"}}>
          <p className={styles.header}>{props.pokemon.name}</p>
          <div className={styles.StatsContainer}>
          <div>
            <p>
              HP:{" "}
              {
                props.pokemon.stats.find(each => each.stat.name === "hp")
                  .base_stat
              }
            </p>
            <p>
              ATQ.ESP:{" "}
              {
                props.pokemon.stats.find(
                  each => each.stat.name === "special-attack"
                ).base_stat
              }
            </p>
          </div>
          <div>
            <p>
              ATAQUE:{" "}
              {
                props.pokemon.stats.find(each => each.stat.name === "attack")
                  .base_stat
              }
            </p>
            <p>
              DEF.ESP:{" "}
              {
                props.pokemon.stats.find(
                  each => each.stat.name === "special-defense"
                ).base_stat
              }
            </p>
          </div>
          <div>
            <p>
              DEFENSA:{" "}
              {
                props.pokemon.stats.find(each => each.stat.name === "defense")
                  .base_stat
              }
            </p>
            <p>
              VELOCIDAD:{" "}
              {
                props.pokemon.stats.find(each => each.stat.name === "speed")
                  .base_stat
              }
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pokemonPreview;
