import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loader} role="status" aria-label="Загрузка">
    <span className={styles.spinner} />
  </div>
);

export default Loader;
