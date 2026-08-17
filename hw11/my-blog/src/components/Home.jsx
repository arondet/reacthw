import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Добро пожаловать в блог</h1>
      <p className={styles.text}>
        Здесь вы найдёте интересные статьи. Перейдите в раздел "Статьи",
        чтобы посмотреть список.
      </p>
    </div>
  );
}

export default Home;