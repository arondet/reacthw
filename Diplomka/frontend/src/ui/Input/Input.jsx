import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(({ label, error, className = '', ...rest }, ref) => (
  <label className={`${styles.wrapper} ${className}`}>
    {label && <span className={styles.label}>{label}</span>}
    <input
      ref={ref}
      aria-label={label ? undefined : rest.placeholder}
      className={`${styles.input} ${error ? styles.inputError : ''}`}
      {...rest}
    />
    {error && <span className={styles.error}>{error}</span>}
  </label>
));

Input.displayName = 'Input';

export default Input;
