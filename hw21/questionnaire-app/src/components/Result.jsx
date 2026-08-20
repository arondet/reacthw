import { useSelector } from 'react-redux';
import styles from './Result.module.css';

function Result() {
  const result = useSelector((state) => state.questionnaire.result);

  if (result === null) {
    return null;
  }

  return (
    <div className={styles.result}>
      <h2 className={styles.title}>Ваш результат</h2>
      <p className={styles.score}>Набрано баллов: {result}</p>
    </div>
  );
}

export default Result;