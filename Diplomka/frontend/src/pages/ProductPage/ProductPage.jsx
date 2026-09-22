import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from '../../layouts/Breadcrumbs/Breadcrumbs';
import Loader from '../../components/Loader/Loader';
import EmptyState from '../../components/EmptyState/EmptyState';
import QuantityStepper from '../../components/QuantityStepper/QuantityStepper';
import Button from '../../ui/Button/Button';
import { getProductImage } from '../../utils/localImages';
import { fetchProductById, clearCurrentProduct } from '../../store/slices/productsSlice';
import { fetchCategories } from '../../store/slices/categoriesSlice';
import { addItem } from '../../store/slices/cartSlice';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import styles from './ProductPage.module.css';

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item: product, status, error } = useSelector((state) => state.products.current);
  const categories = useSelector((state) => state.categories);

  const [qty, setQty] = useState(1);
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [added, setAdded] = useState(false);

  useDocumentTitle(product?.title || 'Товар');

  useEffect(() => {
    dispatch(fetchProductById(id));
    if (categories.status === 'idle') dispatch(fetchCategories());
    setQty(1);
    setDescriptionOpen(false);
    setAdded(false);
    return () => dispatch(clearCurrentProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const category = useMemo(
    () => categories.items.find((cat) => cat.id === product?.categoryId),
    [categories.items, product],
  );

  const hasDiscount = Boolean(product?.discont_price) && product.discont_price < product.price;
  const discountPercent = hasDiscount
    ? Math.round(100 - (product.discont_price / product.price) * 100)
    : 0;

  const breadcrumbs = [
    { label: 'Main page', to: '/' },
    { label: 'Categories', to: '/categories' },
    ...(category ? [{ label: category.title, to: `/categories/${category.id}` }] : []),
    { label: product?.title || '...' },
  ];

  const handleAddToCart = () => {
    dispatch(addItem({ product, qty }));
    setAdded(true);
  };

  return (
    <div className="container">
      <Breadcrumbs items={breadcrumbs} />

      {status === 'loading' && <Loader />}
      {status === 'failed' && <EmptyState title="Товар не найден" description={error} />}

      {status === 'succeeded' && !product && <EmptyState title="Товар не найден" />}

      {status === 'succeeded' && product && (
        <div className={styles.layout}>
          <div className={styles.imageWrap}>
            {hasDiscount && <span className={styles.badge}>-{discountPercent}%</span>}
            <img src={getProductImage(product)} alt={product.title} />
          </div>

          <div className={styles.info}>
            <h1 className={styles.title}>{product.title}</h1>

            <div className={styles.priceRow}>
              <span className={styles.price}>${hasDiscount ? product.discont_price : product.price}</span>
              {hasDiscount && <span className={styles.oldPrice}>${product.price}</span>}
            </div>

            <div className={styles.actions}>
              <QuantityStepper value={qty} onChange={setQty} />
              <Button onClick={handleAddToCart}>Add to cart</Button>
            </div>

            {added && <p className={styles.addedNotice}>Товар добавлен в корзину</p>}

            <div className={styles.description}>
              <h3>Description</h3>
              <p className={descriptionOpen ? styles.descriptionFull : styles.descriptionClamped}>
                {product.description}
              </p>
              <button type="button" className={styles.readMore} onClick={() => setDescriptionOpen((v) => !v)}>
                {descriptionOpen ? 'Show less' : 'Read more'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
