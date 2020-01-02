import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.Footer}>
      <p>{t('COMMON.CREATED_BY')}</p>
      <a
        style={{ textDecoration: 'none' }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/FrancoChoque/pokefinder"
      >
        <p>{t('COMMON.REPO')}</p>
      </a>
    </footer>
  );
};

export default Footer;
