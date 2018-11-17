import React from 'react';
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = () => {    
    return (
        <header className={styles.Toolbar}>
        <div style={{height: "100%"}}><Logo /></div>
            <nav><NavigationItems/>El que quiere pokemons, que los busque</nav>
        </header>
    );
};

export default toolbar;