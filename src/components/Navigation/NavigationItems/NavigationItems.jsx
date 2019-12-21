import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import i18n from '../../../i18n';
import { SPANISH, ENGLISH } from '../../../shared/constants/language';

const changeLanguage = language => {
  i18n.changeLanguage(language);
};

const NavigationItems = () => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/">Pokefinder</NavigationItem>
      <li onClick={() => changeLanguage(SPANISH)} role="presentation">
        <span role="img" aria-label="spanish">
          🇪🇸
        </span>
      </li>
      <li onClick={() => changeLanguage(ENGLISH)} role="presentation">
        <span role="img" aria-label="english">
          🇬🇧
        </span>
      </li>
    </ul>
  );
};

export default NavigationItems;
