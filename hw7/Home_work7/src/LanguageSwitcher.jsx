import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import styles from './App.module.css';

function LanguageSwitcher() {
  const { toggleLanguage } = useContext(LanguageContext);

  return (
    <button className={styles.button} onClick={toggleLanguage}>
      Switch
      <br />
      language
    </button>
  );
}

export default LanguageSwitcher;