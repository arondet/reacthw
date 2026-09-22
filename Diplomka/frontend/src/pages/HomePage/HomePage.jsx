import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/slices/categoriesSlice';
import { fetchAllProducts } from '../../store/slices/productsSlice';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import PromoBanner from './PromoBanner';
import CategoriesPreview from './CategoriesPreview';
import DiscountForm from './DiscountForm';
import SaleProductsPreview from './SaleProductsPreview';
import styles from './HomePage.module.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products.all);

  useDocumentTitle('Home');

  useEffect(() => {
    if (categories.status === 'idle') dispatch(fetchCategories());
    if (products.status === 'idle') dispatch(fetchAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`container ${styles.page}`}>
      <PromoBanner />
      <CategoriesPreview categories={categories.items} status={categories.status} />
      <DiscountForm />
      <SaleProductsPreview products={products.items} status={products.status} />
    </div>
  );
};

export default HomePage;
