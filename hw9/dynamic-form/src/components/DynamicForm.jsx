import { useForm } from 'react-hook-form';
import styles from './DynamicForm.module.css';

function DynamicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const firstFieldValue = watch('firstField', '');
  const showSecondField = firstFieldValue && firstFieldValue.length > 5;

  const onSubmit = (data) => {
    console.log('Данные формы:', data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="firstField">
          First Field
        </label>
        <input
          id="firstField"
          className={styles.input}
          placeholder="moreThan5Symbols"
          {...register('firstField', {
            required: 'Это поле обязательно',
            minLength: {
              value: 6,
              message: 'Минимум 6 символов',
            },
          })}
        />
        {errors.firstField && (
          <p className={styles.error}>{errors.firstField.message}</p>
        )}
      </div>

      {showSecondField && (
        <div className={styles.field}>
          <label className={styles.label} htmlFor="secondField">
            Second Field
          </label>
          <input
            id="secondField"
            className={styles.input}
            {...register('secondField', {
              required: 'Это поле обязательно',
            })}
          />
          {errors.secondField && (
            <p className={styles.error}>{errors.secondField.message}</p>
          )}
        </div>
      )}

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
}

export default DynamicForm;