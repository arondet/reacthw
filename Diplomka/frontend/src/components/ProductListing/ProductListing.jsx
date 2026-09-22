import { useProductListing } from '../../hooks/useProductListing';
import SortFilterBar from '../SortFilterBar/SortFilterBar';
import ProductCard from '../ProductCard/ProductCard';
import Loader from '../Loader/Loader';
import EmptyState from '../EmptyState/EmptyState';
import styles from './ProductListing.module.css';

const ProductListing = ({ title, items, status, error }) => {
  const {
    filtered,
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
    discountedOnly,
    setDiscountedOnly,
    sortBy,
    setSortBy,
  } = useProductListing(items);

  return (
    <>
      <h1 className={styles.title}>{title}</h1>

      {status === 'loading' && <Loader />}
      {status === 'failed' && <EmptyState title="Не удалось загрузить товары" description={error} />}

      {status === 'succeeded' && (
        <>
          <SortFilterBar
            priceFrom={priceFrom}
            setPriceFrom={setPriceFrom}
            priceTo={priceTo}
            setPriceTo={setPriceTo}
            discountedOnly={discountedOnly}
            setDiscountedOnly={setDiscountedOnly}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          {filtered.length === 0 ? (
            <EmptyState title="Ничего не найдено" description="Попробуйте изменить фильтры" />
          ) : (
            <div className={styles.grid}>
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProductListing;
