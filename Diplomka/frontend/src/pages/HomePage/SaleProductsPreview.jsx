import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loader from '../../components/Loader/Loader';
import styles from './CategoriesPreview.module.css';

const pickRandom = (items, count) => {
  const shuffled = [...items].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const SaleProductsPreview = ({ products, status }) => {
  const discounted = useMemo(
    () => products.filter((product) => product.discont_price && product.discont_price < product.price),
    [products],
  );
  const preview = useMemo(() => pickRandom(discounted, 4), [discounted]);

  return (
    <section>
      <div className={styles.header}>
        <h2>Sale</h2>
        <Link to="/sale" className={styles.link}>
          All sales
        </Link>
      </div>

      {status === 'loading' && <Loader />}

      {status === 'succeeded' && (
        <div className={styles.grid}>
          {preview.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SaleProductsPreview;
