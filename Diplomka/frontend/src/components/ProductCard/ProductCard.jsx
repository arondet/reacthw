import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/cartSlice';
import { getProductImage } from '../../utils/localImages';
import styles from './ProductCard.module.css';

const ADDED_LABEL_TIMEOUT = 1500;

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  const hasDiscount = Boolean(product.discont_price) && product.discont_price < product.price;
  const discountPercent = hasDiscount
    ? Math.round(100 - (product.discont_price / product.price) * 100)
    : 0;

  useEffect(() => {
    if (!added) return undefined;
    const timer = setTimeout(() => setAdded(false), ADDED_LABEL_TIMEOUT);
    return () => clearTimeout(timer);
  }, [added]);

  const handleAddToCart = (event) => {
    event.preventDefault();
    dispatch(addItem({ product, qty: 1 }));
    setAdded(true);
  };

  return (
    <Link to={`/products/${product.id}`} className={styles.card}>
      <div className={styles.imageWrap}>
        {hasDiscount && <span className={styles.badge}>-{discountPercent}%</span>}
        <img src={getProductImage(product)} alt={product.title} loading="lazy" />
        <button
          type="button"
          className={`${styles.addButton} ${added ? styles.added : ''}`}
          onClick={handleAddToCart}
        >
          {added ? 'Added' : 'Add to cart'}
        </button>
      </div>
      <p className={styles.title}>{product.title}</p>
      <div className={styles.priceRow}>
        <span className={styles.price}>${hasDiscount ? product.discont_price : product.price}</span>
        {hasDiscount && <span className={styles.oldPrice}>${product.price}</span>}
      </div>
    </Link>
  );
};

export default ProductCard;
