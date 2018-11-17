import React from "react";
import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/">
        Pokefinder
      </NavigationItem>
      <NavigationItem link="/about">
        About
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;
