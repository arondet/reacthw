import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from '../../layouts/Breadcrumbs/Breadcrumbs';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Loader from '../../components/Loader/Loader';
import EmptyState from '../../components/EmptyState/EmptyState';
import { fetchCategories } from '../../store/slices/categoriesSlice';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import styles from './CategoriesPage.module.css';

const BREADCRUMBS = [{ label: 'Main page', to: '/' }, { label: 'Categories' }];

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.categories);

  useDocumentTitle('Категории');

  useEffect(() => {
    if (status === 'idle') dispatch(fetchCategories());
  }, [status, dispatch]);

  return (
    <div className="container">
      <Breadcrumbs items={BREADCRUMBS} />
      <h1 className={styles.title}>Categories</h1>

      {status === 'loading' && <Loader />}
      {status === 'failed' && <EmptyState title="Не удалось загрузить категории" description={error} />}

      {status === 'succeeded' && (
        <div className={styles.grid}>
          {items.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
