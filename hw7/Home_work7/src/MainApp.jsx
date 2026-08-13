import TextDisplay from './TextDisplay';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './App.module.css';

function MainApp() {
  return (
    <div className={styles.page}>
      <TextDisplay />
      <LanguageSwitcher />
    </div>
  );
}

export default MainApp;