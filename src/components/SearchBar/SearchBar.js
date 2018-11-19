import React from "react";
import styles from "./SearchBar.module.css";

const searchBar = props => {
  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.text}
        onChange={event => props.textChanged(event.target.value)}
        onKeyPress={props.onKeyPress}
      />
      <button title="Buscar" onClick={props.clicked} disabled={props.disabled} className={props.disabled ? styles.ButtonDisabled : styles.Button }>
        Buscar
      </button>
    </div>
  );
};


export default searchBar;




