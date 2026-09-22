import { useDispatch } from 'react-redux';
import { changeQty, removeItem } from '../../store/slices/cartSlice';
import { getProductImage } from '../../utils/localImages';
import QuantityStepper from '../../components/QuantityStepper/QuantityStepper';
import styles from './CartPage.module.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const price = item.discont_price || item.price;

  return (
    <div className={styles.item}>
      <img src={getProductImage(item)} alt={item.title} className={styles.itemImage} />
      <div className={styles.itemBody}>
        <div className={styles.itemTop}>
          <p className={styles.itemTitle}>{item.title}</p>
          <button
            type="button"
            className={styles.remove}
            onClick={() => dispatch(removeItem(item.id))}
            aria-label="Удалить товар"
          >
            ×
          </button>
        </div>
        <div className={styles.itemBottom}>
          <QuantityStepper value={item.qty} onChange={(qty) => dispatch(changeQty({ id: item.id, qty }))} />
          <div className={styles.itemPrice}>
            <span className={styles.price}>${price * item.qty}</span>
            {item.discont_price && <span className={styles.oldPrice}>${item.price * item.qty}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
