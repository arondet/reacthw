import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal, clearCart } from '../../store/slices/cartSlice';
import { sendOrder } from '../../api/order';
import CartItem from './CartItem';
import Button from '../../ui/Button/Button';
import Modal from '../../ui/Modal/Modal';
import EmptyState from '../../components/EmptyState/EmptyState';
import ContactFields from '../../components/ContactFields/ContactFields';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import styles from './CartPage.module.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const [orderError, setOrderError] = useState(null);
  const [successOpen, setSuccessOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    setOrderError(null);
    try {
      await sendOrder({
        ...values,
        products: items.map((item) => ({ id: item.id, quantity: item.qty })),
      });
      setSuccessOpen(true);
      reset();
    } catch {
      setOrderError('Не удалось оформить заказ, попробуйте ещё раз.');
    }
  };

  const closeSuccess = () => {
    setSuccessOpen(false);
    dispatch(clearCart());
  };

  const isEmpty = items.length === 0;

  useDocumentTitle(successOpen ? 'Корзина заказ оформлен' : isEmpty ? 'Корзина пустая' : 'Корзина');

  return (
    <div className="container">
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Shopping cart</h1>
        <Link to="/" className={styles.backLink}>
          Back to the store
        </Link>
      </div>

      {isEmpty ? (
        <EmptyState
          title="Looks like you have no items in your basket currently."
          action={
            <Link to="/">
              <Button>Continue Shopping</Button>
            </Link>
          }
        />
      ) : (
        <div className={styles.layout}>
          <div className={styles.items}>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className={styles.summary}>
            <h2>Order details</h2>
            <p className={styles.itemsCount}>{items.length} items</p>
            <div className={styles.totalRow}>
              <span>Total</span>
              <span className={styles.total}>${total}</span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
              <ContactFields register={register} errors={errors} />
              {orderError && <p className={styles.orderError}>{orderError}</p>}
              <Button
                type="submit"
                disabled={isSubmitting || successOpen}
                className={styles.orderButton}
              >
                {successOpen ? 'The Order is Placed' : isSubmitting ? 'Sending...' : 'Order'}
              </Button>
            </form>
          </div>
        </div>
      )}

      <Modal open={successOpen} onClose={closeSuccess} variant="success">
        <h2>Congratulations!</h2>
        <p>Your order has been successfully placed on the website.</p>
        <p>A manager will contact you shortly to confirm your order.</p>
      </Modal>
    </div>
  );
};

export default CartPage;
