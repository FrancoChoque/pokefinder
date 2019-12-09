import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './SearchBar.module.css';

const SearchBar = props => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.text}
        onChange={event => props.textChanged(event.target.value)}
        onKeyPress={props.onKeyPress}
      />
      <button
        type="button"
        onClick={() => i18n.changeLanguage('es')}
        disabled={props.disabled}
        className={props.disabled ? styles.ButtonDisabled : styles.Button}
      >
        {t('SEARCH_BAR.BUTTON')}
      </button>
    </div>
  );
};

export default SearchBar;
