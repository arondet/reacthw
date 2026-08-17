import { Link } from 'react-router-dom';
import styles from './ArticlesList.module.css';

const articles = [
  { id: 1, title: 'Статья 1' },
  { id: 2, title: 'Статья 2' },
  { id: 3, title: 'Статья 3' },
];

function ArticlesList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список статей</h1>
      <ul className={styles.list}>
        {articles.map((article) => (
          <li key={article.id} className={styles.item}>
            <Link to={`/articles/${article.id}`} className={styles.link}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticlesList;