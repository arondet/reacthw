import { Link } from 'react-router-dom';
import { getCategoryImage } from '../../utils/localImages';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ category }) => (
  <Link to={`/categories/${category.id}`} className={styles.card}>
    <div className={styles.imageWrap}>
      <img src={getCategoryImage(category)} alt={category.title} loading="lazy" />
    </div>
    <p className={styles.title}>{category.title}</p>
  </Link>
);

export default CategoryCard;
