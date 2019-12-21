import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './SearchBar.module.css';

const SearchBar = props => {
  const { t } = useTranslation();
  const { clicked, disabled, onKeyPress, placeholder, suggestions, text, textChanged } = props;

  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={event => textChanged(event.target.value)}
        onKeyPress={onKeyPress}
      />
      <button
        type="button"
        onClick={clicked}
        disabled={disabled}
        className={disabled ? styles.ButtonDisabled : styles.Button}
      >
        {t('SEARCH_BAR.BUTTON')}
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  clicked: PropTypes.func,
  disabled: PropTypes.bool,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  suggestions: PropTypes.array,
  text: PropTypes.string,
  textChanged: PropTypes.func,
};

SearchBar.defaultProps = {
  clicked: () => {},
  disabled: false,
  onKeyPress: () => {},
  placeholder: '',
  suggestions: [],
  text: '',
  textChanged: () => {},
};

export default SearchBar;
