import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from '../../layouts/Breadcrumbs/Breadcrumbs';
import ProductListing from '../../components/ProductListing/ProductListing';
import { fetchAllProducts } from '../../store/slices/productsSlice';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

const BREADCRUMBS = [{ label: 'Main page', to: '/' }, { label: 'All products' }];

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products.all);

  useDocumentTitle('Все товары');

  useEffect(() => {
    if (status === 'idle') dispatch(fetchAllProducts());
  }, [status, dispatch]);

  return (
    <div className="container">
      <Breadcrumbs items={BREADCRUMBS} />
      <ProductListing title="All products" items={items} status={status} error={error} />
    </div>
  );
};

export default AllProductsPage;
