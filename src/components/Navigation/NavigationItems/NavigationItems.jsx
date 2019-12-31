import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import i18n from '../../../i18n';
import { SPANISH, ENGLISH } from '../../../shared/constants/language';
import SpainFlag from '../../../assets/images/flags/spainFlag.png';
import UKFlag from '../../../assets/images/flags/UKFlag.jpg';

const changeLanguage = language => {
  i18n.changeLanguage(language);
};

const NavigationItems = () => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/">PokeTable</NavigationItem>
      <NavigationItem link="/finder">PokeFinder</NavigationItem>
      <li onClick={() => changeLanguage(SPANISH)} role="presentation">
        <img src={SpainFlag} alt="spanish.png" />
      </li>
      <li onClick={() => changeLanguage(ENGLISH)} role="presentation">
        <img src={UKFlag} alt="english.png" />
      </li>
    </ul>
  );
};

export default NavigationItems;
