import { Link } from 'react-router-dom';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Loader from '../../components/Loader/Loader';
import styles from './CategoriesPreview.module.css';

const CategoriesPreview = ({ categories, status }) => (
  <section>
    <div className={styles.header}>
      <h2>Categories</h2>
      <Link to="/categories" className={styles.link}>
        All categories
      </Link>
    </div>

    {status === 'loading' && <Loader />}

    {status === 'succeeded' && (
      <div className={styles.grid}>
        {categories.slice(0, 4).map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    )}
  </section>
);

export default CategoriesPreview;
