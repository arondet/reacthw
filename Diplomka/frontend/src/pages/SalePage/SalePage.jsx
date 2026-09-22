import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from '../../layouts/Breadcrumbs/Breadcrumbs';
import ProductListing from '../../components/ProductListing/ProductListing';
import { fetchAllProducts } from '../../store/slices/productsSlice';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

const BREADCRUMBS = [{ label: 'Main page', to: '/' }, { label: 'All sales' }];

const SalePage = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products.all);

  useDocumentTitle('Товары со скидкой');

  useEffect(() => {
    if (status === 'idle') dispatch(fetchAllProducts());
  }, [status, dispatch]);

  const discounted = useMemo(
    () => items.filter((product) => product.discont_price && product.discont_price < product.price),
    [items],
  );

  return (
    <div className="container">
      <Breadcrumbs items={BREADCRUMBS} />
      <ProductListing title="Discounted items" items={discounted} status={status} error={error} />
    </div>
  );
};

export default SalePage;
