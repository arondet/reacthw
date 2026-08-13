import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import styles from './App.module.css';

function TextDisplay() {
  const { language } = useContext(LanguageContext);

  return (
    <h1 className={styles.title}>
      {language === 'en'
        ? 'English language was chosen'
        : 'Был выбран русский язык'}
    </h1>
  );
}

export default TextDisplay;