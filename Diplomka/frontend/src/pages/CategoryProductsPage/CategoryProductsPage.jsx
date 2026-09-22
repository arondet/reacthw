import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from '../../layouts/Breadcrumbs/Breadcrumbs';
import ProductListing from '../../components/ProductListing/ProductListing';
import EmptyState from '../../components/EmptyState/EmptyState';
import Loader from '../../components/Loader/Loader';
import { fetchProductsByCategory } from '../../store/slices/productsSlice';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

const CategoryProductsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { category, items, status, error } = useSelector((state) => state.products.byCategory);

  useDocumentTitle(category?.title || 'Товары из категории');

  useEffect(() => {
    dispatch(fetchProductsByCategory(id));
  }, [id, dispatch]);

  const breadcrumbs = [
    { label: 'Main page', to: '/' },
    { label: 'Categories', to: '/categories' },
    { label: category?.title || '...' },
  ];

  if (status === 'succeeded' && !category) {
    return (
      <div className="container">
        <Breadcrumbs items={[{ label: 'Main page', to: '/' }, { label: 'Categories', to: '/categories' }]} />
        <EmptyState title="В этой категории пока нет товаров" />
      </div>
    );
  }

  return (
    <div className="container">
      <Breadcrumbs items={breadcrumbs} />
      {status === 'loading' && <Loader />}
      {status === 'failed' && <EmptyState title="Не удалось загрузить категорию" description={error} />}
      {status === 'succeeded' && category && (
        <ProductListing title={category.title} items={items} status={status} error={error} />
      )}
    </div>
  );
};

export default CategoryProductsPage;
