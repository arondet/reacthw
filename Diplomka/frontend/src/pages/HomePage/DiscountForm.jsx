import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../ui/Button/Button';
import ContactFields from '../../components/ContactFields/ContactFields';
import { sendDiscountRequest } from '../../api/sale';
import styles from './DiscountForm.module.css';

const DiscountForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [result, setResult] = useState(null);

  const onSubmit = async (values) => {
    setResult(null);
    try {
      await sendDiscountRequest(values);
      setResult({ type: 'success', message: 'Заявка отправлена! Проверьте почту.' });
      reset();
    } catch {
      setResult({ type: 'error', message: 'Не удалось отправить заявку, попробуйте ещё раз.' });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.text}>
        <h2>5% off on the first order</h2>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <ContactFields register={register} errors={errors} />
        <Button
          type="submit"
          disabled={isSubmitting || result?.type === 'success'}
          className={`${styles.submit} ${result?.type === 'success' ? styles.submitted : ''}`}
        >
          {result?.type === 'success' ? 'Request Submitted' : isSubmitting ? 'Sending...' : 'Get a discount'}
        </Button>
      </form>

      {result?.type === 'error' && <p className={`${styles.result} ${styles.resultError}`}>{result.message}</p>}
    </section>
  );
};

export default DiscountForm;
