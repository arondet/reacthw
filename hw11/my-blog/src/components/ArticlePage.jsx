import { useParams, useNavigate } from 'react-router-dom';
import styles from './ArticlePage.module.css';

function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Статья {id}</h1>
      <p className={styles.text}>Содержание статьи {id}...</p>
      <p className={styles.path}>Текущий путь: /articles/{id}</p>
      <button className={styles.button} onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}

export default ArticlePage;