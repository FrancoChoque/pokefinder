import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './SearchBar.module.css';

const SearchBar = props => {
  const { t } = useTranslation();
  const [searchText, changeSearchText] = useState('');
  const { searchPokemon, disabled, placeholder } = props;

  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={event => changeSearchText(event.target.value)}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            searchPokemon(searchText);
          }
        }}
      />
      <button
        type="button"
        onClick={() => searchPokemon(searchText)}
        disabled={disabled}
        className={disabled ? styles.ButtonDisabled : styles.Button}
      >
        {t('SEARCH_BAR.BUTTON')}
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  searchPokemon: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  searchPokemon: () => {},
  disabled: false,
  placeholder: '',
};

export default SearchBar;
